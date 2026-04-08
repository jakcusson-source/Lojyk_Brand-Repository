import { useCart } from '@/store/cart'
import { useEffect, useState } from 'react'
import products from '@/data/products'
import { createCheckoutSession, getStripeEnabled } from '@/lib/stripe'

export default CartSidebar{
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems } = useCart()
  const [loading, setLoading] = useState(false)
  const [stripeEnabled, setStripeEnabled] = useState<boolean | null>(null)

  useEffect(() => {
    getStripeEnabled().then(setStripeEnabled)
  }, [])

  const total = items.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId)
    return sum + (product?.price ?? 0) * item.quantity
  }, 0)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const url = await createCheckoutSession({ data: items })
      if (url) window.location.href = url
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase">
            Cart ({totalItems})
          </span>
          <button onClick={closeCart} className="text-xl leading-none hover:opacity-50 transition-opacity">
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-6">
              <p className="text-xs tracking-[0.15em] uppercase text-gray-400">Your cart is empty</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.productId)
                if (!product) return null
                return (
                  <li key={item.productId} className="flex gap-4 px-6 py-5">
                    <div className="w-20 h-24 bg-gray-50 flex-shrink-0 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-1">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">${product.price}</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="w-6 h-6 border border-black flex items-center justify-center text-sm hover:bg-black hover:text-white transition-colors"
                        >
                          −
                        </button>
                        <span className="text-xs w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="w-6 h-6 border border-black flex items-center justify-center text-sm hover:bg-black hover:text-white transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="text-gray-300 hover:text-black transition-colors text-xs self-start pt-1"
                    >
                      ✕
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-black px-6 py-6">
            <div className="flex justify-between items-center mb-5">
              <span className="text-xs tracking-[0.15em] uppercase">Total</span>
              <span className="text-sm font-semibold">${total.toLocaleString()}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={loading || stripeEnabled === false}
              className="w-full bg-black text-white text-xs tracking-[0.2em] uppercase py-4 hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading
                ? 'Processing...'
                : stripeEnabled === false
                  ? 'Checkout Unavailable'
                  : 'Checkout'}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
