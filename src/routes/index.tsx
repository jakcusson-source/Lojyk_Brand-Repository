import { Link, createFileRoute } from '@tanstack/react-router'
import Products from "../Products"
import Hero from "../hero"
import { useCart } from '@/store/cart'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { addItem } = useCart()

  return ( <main>
      <Hero />
      <Products />
    </main>
  )
}
    <div>
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gray-600" />
          <span className="text-[9px] text-gray-600 tracking-[0.3em] uppercase">Scroll</span>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-[10px] tracking-[0.35em] uppercase font-semibold">
            All Products
          </h2>
          <span className="text-[10px] text-gray-400 tracking-wide">
            {products.length} pieces
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Image */}
              <Link
                to="/products/$productId"
                params={{ productId: product.id.toString() }}
                className="block mb-4 overflow-hidden bg-gray-50 aspect-[3/4] relative"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </Link>

              {/* Info */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[10px] text-gray-400 tracking-[0.2em] uppercase mb-1">
                    {product.category}
                  </p>
                  <Link
                    to="/products/$productId"
                    params={{ productId: product.id.toString() }}
                    className="text-xs font-semibold tracking-[0.15em] uppercase hover:opacity-50 transition-opacity"
                  >
                    {product.name}
                  </Link>
                </div>
                <span className="text-xs font-medium whitespace-nowrap">
                  ${product.price}
                </span>
              </div>

              <button
                onClick={() => addItem(product.id)}
                className="mt-3 text-[10px] tracking-[0.25em] uppercase border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Strip */}
      <section className="bg-black py-20 px-6 text-white text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-gray-500 mb-4">
          The LOJYK Standard
        </p>
        <p className="font-display text-5xl md:text-7xl tracking-widest max-w-2xl mx-auto leading-tight">
          WEAR LESS. SAY MORE.
        </p>
      </section>
    </div>
  )
}
