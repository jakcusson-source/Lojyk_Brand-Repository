import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'
import { useCart } from '@/store/cart'

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetail,
  loader: async ({ params }) => {
    const product = products.find((p) => p.id === +params.productId)
    if (!product) throw new Error('Product not found')
    return product
  },
})

function ProductDetail() {
  const product = Route.useLoaderData()
  const { addItem } = useCart()

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-gray-400 hover:text-black transition-colors mb-12"
        >
          <span>←</span>
          <span>Back</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <p className="text-[10px] tracking-[0.35em] uppercase text-gray-400 mb-3">
              {product.category}
            </p>
            <h1 className="font-display text-5xl md:text-6xl tracking-widest mb-6">
              {product.name}
            </h1>

            <div className="w-12 h-px bg-black mb-6" />

            <p className="text-2xl font-light mb-8">${product.price}</p>

            <p className="text-sm text-gray-600 leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Size selector placeholder */}
            <div className="mb-8">
              <p className="text-[10px] tracking-[0.25em] uppercase font-semibold mb-3">
                Size
              </p>
              <div className="flex gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className="w-10 h-10 border border-gray-200 text-xs tracking-wide hover:border-black transition-colors first:border-black"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => addItem(product.id)}
              className="w-full bg-black text-white text-[10px] tracking-[0.3em] uppercase py-5 hover:bg-gray-900 transition-colors mb-4"
            >
              Add to Cart
            </button>

            <p className="text-[10px] text-gray-400 tracking-wide text-center">
              Free worldwide shipping on orders over $200
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
