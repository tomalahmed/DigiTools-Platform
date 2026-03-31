import { useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import products from './data/products.json'

import Navbar from './components/layout/Navbar'
import Banner from './components/layout/Banner'
import Stats from './components/layout/Stats'
import Steps from './components/layout/Steps'
import Pricing from './components/layout/Pricing'
import Footer from './components/layout/Footer'
import MainToggleArea from './components/shop/MainToggleArea'

function App() {
  const [activeView, setActiveView] = useState('products') // 'products' | 'cart'
  const [cartItems, setCartItems] = useState([])

  const cartCount = cartItems.length

  const cartIdSet = useMemo(() => new Set(cartItems.map((p) => p.id)), [cartItems])

  const handleAddToCart = (product) => {
    if (cartIdSet.has(product.id)) {
      toast.info('Already added to cart')
      return
    }
    setCartItems((prev) => [...prev, product])
    toast.success(`${product.name} added to cart`)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cartCount} />
      <Banner />
      <Stats />
      <MainToggleArea
        activeView={activeView}
        onChangeView={setActiveView}
        products={products}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onSwitchToCart={() => setActiveView('cart')}
      />
      <Steps />
      <Pricing />
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar />
    </div>
  )
}

export default App
