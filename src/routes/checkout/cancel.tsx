import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/cancel')({
  component: CheckoutCancel,
})

function CheckoutCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        <div className="w-16 h-16 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-8 text-xl text-gray-400">
          ×
        </div>
        <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-4">
          Checkout Cancelled
        </p>
        <h1 className="font-display text-4xl tracking-widest mb-6">
          NO CHARGE
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed mb-10">
          Your payment was cancelled. No charges were made to your account.
        </p>
        <Link
          to="/"
          className="inline-block border border-black text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:bg-black hover:text-white transition-colors"
        >
          Return to Shop
        </Link>
      </div>
    </div>
  )
}
