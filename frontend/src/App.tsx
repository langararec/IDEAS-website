import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'

import Test from './pages/Test'
function App() {


  return (
    <Router>
      <Navbar />
      {/* Spacer to prevent content from being hidden behind the fixed navbar */}
      <div className='mt-24'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
