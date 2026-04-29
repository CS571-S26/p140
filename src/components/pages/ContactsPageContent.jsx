import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'

export default function ContactsPageContent() {
  return (
    <Container className="contacts-page">
      <Row className="contacts-page__header-row">
        <Col lg={8}>
          <p className="contacts-page__eyebrow">Contacts</p>
          <h1 className="contacts-page__title">Let&apos;s K.I.T. yo</h1>
          <p className="contacts-page__lead">
            Here are the places I&apos;m easiest to reach if you want to connect with the creator of this glorious website.
          </p>
        </Col>
      </Row>

      <Row xs={1} md={2} className="contacts-page__grid">
        <Col>
          <Card className="contacts-page__panel">
            <Card.Body>
              <Card.Title>Social</Card.Title>
              <ListGroup variant="flush" className="contacts-page__list">
                <ListGroup.Item>
                  <a
                    href="https://www.linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacts-page__link"
                  >
                    LinkedIn
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://github.com/your-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacts-page__link"
                  >
                    GitHub
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="contacts-page__panel">
            <Card.Body>
              <Card.Title>Email</Card.Title>
              <Card.Text className="contacts-page__text">
                The fastest way to reach me directly is by email (sometimes...).
              </Card.Text>
              <ListGroup variant="flush" className="contacts-page__list">
                <ListGroup.Item>
                  <a href="mailto:you@example.com" className="contacts-page__link">
                    you@example.com
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
