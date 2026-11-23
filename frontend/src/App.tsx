import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
import Updates from './pages/Updates/Updates'
import Team from './pages/Team/Team'
import GetInvolved from './pages/Get-Involved/GetInvolved'
import EngagementSchedule from './pages/EngagementSchedule/EngagementSchedule'
import Gallery from './pages/Gallery/Gallery'
import References from './pages/References/References'
import Findings from './pages/Findings/Findings'
import NotFound from './pages/NotFound'
import ResearchLayout, { ResearchPlaceholder } from './components/ResearchLayout'
import ResearchHub from './pages/Home/ResearchHub'
import { researchProjects } from './content/ResearchHubContent'
import ScrollToTop from './components/ScrollToTop'

const Statistics = lazy(() => import('./pages/Statistics/Statistics'))


function App() {


  return (
    <Router>
      <ScrollToTop />
      <ResearchLayout>
      <Routes>
        <Route path="/" element={<ResearchHub />} />
        <Route path="/ideas" element={<Home />} />
        {researchProjects.slice(1).map(project => (
          <Route key={project.id} path={`${project.path}/*`} element={<ResearchPlaceholder project={project} />} />
        ))}
        <Route path="/ideas/project" element={<Project />} />
        <Route path="/ideas/updates" element={<Updates />} />
        <Route path="/ideas/team" element={<Team />} />
        <Route path="/ideas/get-involved" element={<GetInvolved />} />
        <Route path="/ideas/schedule" element={<EngagementSchedule />} />
        <Route path="/ideas/gallery" element={<Gallery />} />
        <Route path="/ideas/references" element={<References />} />
        <Route path="/ideas/statistics" element={<Suspense fallback={null}><Statistics /></Suspense>} />
        <Route path="/ideas/staff" element={<Navigate to="/ideas/statistics" replace />} />
        <Route path="/ideas/findings" element={<Findings />} />
        <Route path="/project" element={<Navigate to="/ideas/project" replace />} />
        <Route path="/updates" element={<Navigate to="/ideas/updates" replace />} />
        <Route path='/team' element={<Navigate to="/ideas/team" replace />} />
        <Route path='/get-involved' element={<Navigate to="/ideas/get-involved" replace />} />
        <Route path='/schedule' element={<Navigate to="/ideas/schedule" replace />} />
        <Route path='/gallery' element={<Navigate to="/ideas/gallery" replace />} />
        <Route path='/references' element={<Navigate to="/ideas/references" replace />} />
        <Route path='/statistics' element={<Navigate to="/ideas/statistics" replace />} />
        <Route path='/staff' element={<Navigate to="/ideas/statistics" replace />} />
        <Route path='/findings' element={<Navigate to="/ideas/findings" replace />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
      </ResearchLayout>
    </Router>
  )
}

export default App;
