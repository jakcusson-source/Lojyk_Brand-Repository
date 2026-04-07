import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="border-t border-black mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="font-display text-3xl tracking-widest mb-4">LOJYK</div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Minimal. Editorial. Uncompromising. Clothing built for those who move through silence.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase font-semibold mb-4">Navigate</p>
            <ul className="space-y-3">
              {['Shop', 'About', 'Lookbook', 'Stockists'].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-xs text-gray-500 hover:text-black transition-colors tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase font-semibold mb-4">Info</p>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact'].map((item) => (
                <li key={item}>
                  <span className="text-xs text-gray-500 tracking-wide cursor-pointer hover:text-black transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[10px] text-gray-400 tracking-widest uppercase">
            © 2024 LOJYK. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-400 tracking-wide">
            Worldwide Shipping
          </p>
        </div>
      </div>
    </footer>
  )
}
