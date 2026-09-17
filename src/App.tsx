import { Route, Routes } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home/Home'
import Privacy from '@/pages/Privacy/Privacy'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
