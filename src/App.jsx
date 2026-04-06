import { useCallback, useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import products from './data/products.json'
import { scrollToSection } from './utils/scrollToSection'

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

  const handleRemoveFromCart = (productId) => {
    const productToRemove = cartItems.find((item) => item.id === productId)
    if (!productToRemove) return

    setCartItems((prev) => prev.filter((item) => item.id !== productId))
    toast.warn(`${productToRemove.name} removed from cart`)
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.info('Your cart is already empty')
      return
    }

    setCartItems([])
    toast.success('Proceed to checkout completed. Cart cleared.')
    setActiveView('products')
  }

  const goToProducts = useCallback(() => {
    setActiveView('products')
    scrollToSection('products')
  }, [])

  const openCart = useCallback(() => {
    setActiveView('cart')
    scrollToSection('products')
  }, [])

  const handleWatchDemo = useCallback(() => {
    toast.info('Demo video would open here in a full product.')
  }, [])

  const handleLogin = useCallback(() => {
    toast.info('Login is not wired in this demo build.')
  }, [])

  const handleGetStarted = useCallback(() => {
    goToProducts()
    toast.success('Pick a tool below to add it to your cart.')
  }, [goToProducts])

  const handlePlanSelect = useCallback((planName, ctaLabel) => {
    if (planName === 'Enterprise') {
      toast.info('Contact sales: sales@digitools.example')
      return
    }
    toast.success(`${ctaLabel} — ${planName} plan selected (demo).`)
  }, [])

  return (
    <div id="top" className="min-h-screen bg-brand-page">
      <Navbar
        cartCount={cartCount}
        onOpenCart={openCart}
        onGoToProducts={goToProducts}
        onLogin={handleLogin}
        onGetStarted={handleGetStarted}
      />
      <Banner onExploreProducts={goToProducts} onWatchDemo={handleWatchDemo} />
      <Stats />
      <MainToggleArea
        activeView={activeView}
        onChangeView={setActiveView}
        products={products}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      <Steps />
      <Pricing onSelectPlan={handlePlanSelect} />
      <Footer onExploreProducts={goToProducts} onViewPricing={() => scrollToSection('pricing')} />
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar />
    </div>
  )
}

export default App
