import { Link, createFileRoute } from '@tanstack/react-router'
import Products from "../components/Products"
import Hero from "../components/hero"
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
