import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

const linkClassName = ({ isActive }) =>
  isActive ? 'nav-link active fw-semibold' : 'nav-link'

export default function NavBar() {
  return (
    <Navbar expand="md" className="border-bottom bg-body-tertiary mb-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/" end className="d-flex align-items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}favicon.svg`}
            alt="Black icon with initials JS (The website creator Jackson Sprenger)"
            aria-hidden="true"
            width="24"
            height="24"
            className="d-inline-block align-text-top"
          />
          <span>Codefolio</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end className={linkClassName}>
              Home
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