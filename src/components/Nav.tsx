import { Link } from '@tanstack/react-router'
import { useCart } from '@/store/cart'

export function Nav() {
  const { totalItems, openCart } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Left nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-[10px] tracking-[0.25em] uppercase font-medium hover:opacity-50 transition-opacity"
          >
            Shop
          </Link>
        </nav>

        {/* Logo */}
        <Link
          to="/"
          className="font-display text-2xl tracking-widest absolute left-1/2 -translate-x-1/2"
        >
          LOJYK
        </Link>

        {/* Right nav */}
        <div className="flex items-center gap-6">
          <button
            onClick={openCart}
            className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-medium hover:opacity-50 transition-opacity"
          >
            <CartIcon />
            {totalItems > 0 && (
              <span className="bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}
