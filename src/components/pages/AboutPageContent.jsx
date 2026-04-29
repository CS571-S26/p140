import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AboutPageContent() {
  return (
    <Container className="about-page">
      <Row className="about-page__header-row">
        <Col lg={8}>
          <p className="about-page__eyebrow">About Me</p>
          <h1 className="about-page__title">Wait a minute ... Who is this guy?</h1>
          
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} className="about-page__grid">
        <Col>
          <Card className="about-page__panel">
            <Card.Body>
              <Card.Title>Background</Card.Title>
              <Card.Text>
                I studied super hard at UW Madison for 4 years while juggling various jobs the entire time. Right now I currently work at Novel Minds, a software development company based in Madison. Check out my work there on LinkedIn if you'd like!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="about-page__panel">
            <Card.Body>
              <Card.Title>What I&apos;m Currently Developing</Card.Title>
              <ListGroup variant="flush" className="about-page__list">
                <ListGroup.Item>Minecraft Mods</ListGroup.Item>
                <ListGroup.Item>An Eviction Mediation Tool</ListGroup.Item>
                <ListGroup.Item>A SlackBot for PBS Wisconsin</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="about-page__panel">
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text>
                Want to see more?
              </Card.Text>
              <Button as={Link} to="/contact" variant="outline-secondary">
                Contact Me
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}