import { useState } from "react"
import { useCart } from "@/store/cart"

export default function Nav() {
  const { items, removeItem } = useCart()
  const [open, setOpen] = useState(false)

  const total = items.reduce((acc, item) => acc + item.price, 0)

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 border-b">

        <h1 className="text-xl font-bold">LOJYK</h1>

        <div className="flex gap-6 items-center">

          <a href="/" className="hover:opacity-70">
            Home
          </a>

          <button
            onClick={() => setOpen(true)}
            className="relative"
          >
            Cart ({items.length})
          </button>

        </div>
      </nav>

      {/* CART SIDEBAR */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-end">

          <div className="bg-white w-96 h-full p-6">

            <div className="flex justify-between mb-6">
              <h2 className="text-xl font-bold">Your Cart</h2>

              <button onClick={() => setOpen(false)}>
                Close
              </button>
            </div>

            {items.length === 0 && (
              <p>Your cart is empty</p>
            )}

            {items.map(item => (
              <div
                key={item.id}
                className="flex justify-between mb-4"
              >
                <div>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="border-t pt-4 mt-6">

              <p className="font-bold">
                Total: ${total}
              </p>

              <button className="mt-4 w-full bg-black text-white p-3">
                Checkout
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  )
}
