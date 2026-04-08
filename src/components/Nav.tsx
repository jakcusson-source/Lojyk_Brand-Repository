import { useState } from "react"
import { useCart } from "@/store/cart"
import CartSidebar from "./CartSidebar"

export default function Nav() {
  const { items } = useCart()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <nav className="flex justify-between p-6 border-b">

        <h1 className="text-xl font-bold">LOJYK</h1>

        <button onClick={() => setCartOpen(true)}>
          Cart ({items.length})
        </button>

      </nav>

      {cartOpen && (
        <CartSidebar closeCart={() => setCartOpen(false)} />
      )}
    </>
  )
}
