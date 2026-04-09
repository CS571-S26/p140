import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
            <Button as={Link} to="/projects" variant="primary">
              View Projects
            </Button>
            <Button as={Link} to="/about" variant="outline-secondary">
              About Me
            </Button>
          </div>
        </Col>
      </Row>

      <Row xs={1} md={3} className="home-page__grid">
        <Col>
          <Card className="home-page__panel">
            <Card.Body>
              <Card.Title>Placeholder 1</Card.Title>
              <Card.Text>Placeholder text.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="home-page__panel">
            <Card.Body>
              <Card.Title>Placeholder 2</Card.Title>
              <Card.Text>Placeholder text.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="home-page__panel">
            <Card.Body>
              <Card.Title>Placeholder 3</Card.Title>
              <Card.Text>Placeholder text.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}