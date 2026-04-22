import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'
import SecretPage from './pages/SecretPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Layout from './components/Layout.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:projectSlug" element={<ProjectDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactsPage />} />
        <Route path="secret" element={<SecretPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
