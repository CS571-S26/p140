import { Outlet } from 'react-router-dom'
import '../App.css'
import NavBar from './NavBar.jsx'

export default function Layout() {
  return (
    <div className="app-shell theme--dusty">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
