import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SecretPage() {
  return (
    <Container className="secret-page">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="secret-page__panel">
            <Card.Body className="secret-page__body">
              <p className="secret-page__eyebrow">Secret unlocked</p>
              <h1 className="secret-page__title">You found the hidden page!</h1>
              <p className="secret-page__lead">
                You had 1 in 100 chance of ending up here from the I&apos;m Feeling Lucky Button!
                Not everyone clicks that button, but you did, and that means something, so enjoy your reward! 
              </p>
              <div className="secret-page__actions">
                <Button as={Link} to="/" variant="primary">
                  Go Back
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
