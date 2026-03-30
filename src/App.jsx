import Navbar from './components/layout/Navbar'
import Banner from './components/layout/Banner'
import Stats from './components/layout/Stats'
import Steps from './components/layout/Steps'
import Pricing from './components/layout/Pricing'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Banner />
      <Stats />
      <Steps />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
