import { useCart } from '@/store/cart'

export default function BuyButton({
  productId,
  name,
  price,
  className = '',
}: {
  productId: number
  name: string
  price: number
  className?: string
}) {
  const { addItem } = useCart()

  return (
    <button
      onClick={() =>
        addItem({
          id: productId,
          name: name,
          price: price,
        })
      }
      className={`bg-black text-white text-[10px] tracking-[0.25em] uppercase px-6 py-3 hover:bg-gray-900 transition-colors ${className}`}
    >
      Add to Cart
    </button>
  )
}
