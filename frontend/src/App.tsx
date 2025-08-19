import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
import Updates from './pages/Updates/Updates'
import Team from './pages/Team/Team'
import GetInvolved from './pages/Get-Involved/GetInvolved'
import EngagementSchedule from './pages/EngagementSchedule/EngagementSchedule'
import Gallery from './pages/Gallery/Gallery'
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
        <Route path='/team' element={<Team />} />
        <Route path='/get-involved' element={<GetInvolved />} />
        <Route path='/schedule' element={<EngagementSchedule />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='*' element={<NotFound />} />

      </Routes>

      <Footer />
    </Router>
  )
}

export default App;
