import { Outlet } from 'react-router-dom'
import '../App.css'
import NavBar from './NavBar.jsx'

export default function Layout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
