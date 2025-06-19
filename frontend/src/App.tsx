import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
import Updates from './pages/Updates/Updates'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {


  return (
    <Router>
      <Navbar />
      {/* Spacer to prevent content from being hidden behind the fixed navbar */}
      <div className='mt-20'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/updates" element={<Updates />} />
        <Route path='*' element={<NotFound />} />

      </Routes>

      <Footer />
    </Router>
  )
}

export default App;
