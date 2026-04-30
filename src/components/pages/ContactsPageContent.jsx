import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'

export default function ContactsPageContent() {
  return (
    <Container className="contacts-page">
      <Row className="contacts-page__header-row">
        <Col lg={8}>
          <p className="contacts-page__eyebrow">Contacts</p>
          <h1 className="contacts-page__title">Let&apos;s Keep In Touch</h1>
        </Col>
      </Row>

      <Row xs={1} md={2} className="contacts-page__grid">
        <Col>
          <Card className="contacts-page__panel">
            <Card.Body>
              <Card.Title>Socials</Card.Title>
              <ListGroup variant="flush" className="contacts-page__list">
                <ListGroup.Item>
                  <a
                    href="https://www.linkedin.com/in/sprengerjackson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacts-page__link"
                  >
                    LinkedIn
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://github.com/jacksonsprenger"
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
                The fastest way for you to reach me is directly is by email.
              </Card.Text>
              <ListGroup variant="flush" className="contacts-page__list">
                <ListGroup.Item>
                  <a href="mailto:you@example.com" className="contacts-page__link">
                    sprengerjackson@gmail.com
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
