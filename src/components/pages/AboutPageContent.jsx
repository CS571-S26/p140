import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'

export default function AboutPageContent() {
  return (
    <Container className="about-page">
      <Row className="about-page__header-row">
        <Col lg={8}>
          <p className="about-page__eyebrow">About</p>
          <h1 className="about-page__title">Wait a minute ... Who are you?</h1>
          <p className="about-page__lead">
            I&apos;m Jackson and this is my about me page.
          </p>
        </Col>
      </Row>

      <Row xs={1} md={2} className="about-page__grid">
        <Col>
          <Card className="about-page__panel">
            <Card.Body>
              <Card.Title>Background</Card.Title>
              <Card.Text>
                I studied super hard at UW Madison
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
                <ListGroup.Item>A plan to replace microsoft</ListGroup.Item>
                <ListGroup.Item>A new way to blow bubbles</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}