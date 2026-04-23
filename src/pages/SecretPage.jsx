import { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { readJsonCookie, writeJsonCookie } from '../utils/cookieStore.js'

const SECRET_COOKIE_KEY = 'codefolio-secret-i-was-here'

function readSecretState() {
  return readJsonCookie(SECRET_COOKIE_KEY, {
    checked: false,
    clickCount: 0,
  })
}

export default function SecretPage() {
  const [secretState, setSecretState] = useState(() => readSecretState())

  function handleWasHereClick() {
    if (secretState.checked) {
      return
    }

    const nextState = {
      checked: true,
      clickCount: secretState.clickCount + 1,
    }

    setSecretState(nextState)
    writeJsonCookie(SECRET_COOKIE_KEY, nextState)
  }

  const peopleBeforeYou = secretState.clickCount === 1 ? '1 person' : `${secretState.clickCount} people`

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
              <div className="secret-page__check-in">
                <Button
                  type="button"
                  variant={secretState.checked ? 'success' : 'primary'}
                  onClick={handleWasHereClick}
                  disabled={secretState.checked}
                  aria-pressed={secretState.checked}
                >
                  I was here
                </Button>
                <p className="secret-page__counter">
                  {peopleBeforeYou} clicked this before you.
                </p>
              </div>
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
