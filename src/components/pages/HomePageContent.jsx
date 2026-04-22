import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FeelingLuckyButton from '../FeelingLuckyButton.jsx'
import FeaturedProjectsCarousel from './FeaturedProjectsCarousel.jsx'

export default function HomePageContent() {
  return (
    <Container className="home-page">
      <Row className="home-page__hero-row">
        <Col lg={8} className="home-page__hero-col">
          <p className="home-page__eyebrow">Portfolio</p>
          <h1 className="home-page__title">Hi, I&apos;m Jackson.</h1>
          <p className="home-page__lead">
            This is a placeholder. I&apos;ll use this site to highlight my
            coursework, side projects, and growth as a developer.
          </p>
          <div className="home-page__actions">
            <Button as={Link} to="/projects" variant="primary" className="home-page__action-button">
              View Projects
            </Button>
            <Button as={Link} to="/about" variant="outline-secondary" className="home-page__action-button">
              About Me
            </Button>
            <Button as={Link} to="/contact" variant="outline-secondary" className="home-page__action-button">
              Contact Me
            </Button>
            <FeelingLuckyButton variant="outline-secondary" className="home-page__action-button" />
          </div>
        </Col>
      </Row>

      <Row className="home-page__featured-row">
        <Col>
          <div className="home-page__section-heading">
            <p className="home-page__eyebrow">Featured Projects</p>
          </div>
          <FeaturedProjectsCarousel />
        </Col>
      </Row>
    </Container>
  )
}