import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
function App() {


  return (
    <Router>
      <Navbar />
      {/* Spacer to prevent content from being hidden behind the fixed navbar */}
      <div className='mt-24'></div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
