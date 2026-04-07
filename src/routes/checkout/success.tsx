import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/success')({
  component: CheckoutSuccess,
})

function CheckoutSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center mx-auto mb-8 text-xl">
          ✓
        </div>
        <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-4">
          Order Confirmed
        </p>
        <h1 className="font-display text-4xl tracking-widest mb-6">
          THANK YOU
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed mb-10">
          Your order has been placed. You'll receive a confirmation email shortly.
        </p>
        <Link
          to="/"
          className="inline-block border border-black text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:bg-black hover:text-white transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
