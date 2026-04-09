import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

const linkClassName = ({ isActive }) =>
  isActive ? 'site-navbar__link site-navbar__link--active' : 'site-navbar__link'

export default function NavBar() {
  return (
    <Navbar expand="md" className="site-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/" end className="site-navbar__brand">
          <img
            src={`${import.meta.env.BASE_URL}favicon.svg`}
            alt="Black icon with initials JS (The website creator Jackson Sprenger)"
            aria-hidden="true"
            width="24"
            height="24"
            className="site-navbar__brand-icon"
          />
          <span>Codefolio</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="site-navbar__links">
            <Nav.Link as={NavLink} to="/" end className={linkClassName}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className={linkClassName}>
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={linkClassName}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}