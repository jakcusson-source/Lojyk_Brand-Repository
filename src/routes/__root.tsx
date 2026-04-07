import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { CartProvider } from '@/store/cart'
import { Nav } from '@/components/Nav'
import { CartSidebar } from '@/components/CartSidebar'
import { Footer } from '@/components/Footer'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'LOJYK' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-white text-black">
        <CartProvider>
          <Nav />
          <main className="pt-14">
            {children}
          </main>
          <Footer />
          <CartSidebar />
        </CartProvider>
        <Scripts />
      </body>
    </html>
  )
}
