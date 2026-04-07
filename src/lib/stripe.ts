import { createServerFn } from '@tanstack/react-start'
import products from '@/data/products'

export interface CartItemInput {
  productId: number
  quantity: number
}

export const getStripeEnabled = createServerFn({ method: 'GET' }).handler(
  () => !!process.env.STRIPE_SECRET_KEY
)

export const createCheckoutSession = createServerFn({
  method: 'POST',
})
  .inputValidator((cartItems: CartItemInput[]) => cartItems)
  .handler(async ({ data: cartItems }) => {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('Stripe is not configured')
    }
    const { default: Stripe } = await import('stripe')
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    const lineItems = cartItems.map(({ productId, quantity }) => {
      const product = products.find((p) => p.id === productId)
      if (!product) throw new Error(`Product ${productId} not found`)
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            description: product.shortDescription,
          },
          unit_amount: product.price * 100,
        },
        quantity,
      }
    })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.SITE_URL ?? 'http://localhost:3000'}/checkout/success`,
      cancel_url: `${process.env.SITE_URL ?? 'http://localhost:3000'}/checkout/cancel`,
    })

    return session.url
  })
