import { useEffect, useState } from 'react'
import { Badge, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { getTagToneClass } from '../utils/tagStyles.js'

export default function ProjectDetailPage() {
  const { projectSlug } = useParams()
  const project = projects.find(candidate => candidate.slug === projectSlug)
  const navigate = useNavigate()
  const [heroOffset, setHeroOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const nextOffset = Math.min(window.scrollY * 0.25, 180)
      setHeroOffset(nextOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleGoBack() {
    if (window.history.length > 1) {
      navigate(-1)
      return
    }

    navigate('/projects')
  }

  useEffect(() => {
    document.body.classList.add('project-detail-active')

    return () => {
      document.body.classList.remove('project-detail-active')
    }
  }, [])

  if (!project) {
    return (
      <Container className="project-detail-page">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="project-detail-page__panel">
              <Card.Body>
                <Card.Title>Project not found</Card.Title>
                <Card.Text>
                  That project does not exist yet. Try selecting a different project from the list.
                </Card.Text>
                <Button as={Link} to="/projects" variant="primary">
                  Back to projects
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <div className="project-detail-page">
      <section className="project-detail-page__hero-wrap">
        <div
          className="project-detail-page__hero"
          aria-hidden="true"
        >
          <div
            className="project-detail-page__hero-media"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(16, 27, 38, 0.68), rgba(16, 27, 38, 0.4)), url(${project.imageUrl})`,
              transform: `translate3d(0, ${heroOffset}px, 0)`,
            }}
          />
        </div>

        <Container className="project-detail-page__hero-content-wrap">
          <div className="project-detail-page__hero-content">
            <p className="project-detail-page__eyebrow">Project Detail</p>
            <h1 className="project-detail-page__title">{project.title}</h1>
            <p className="project-detail-page__lead">{project.description}</p>
          </div>
        </Container>
      </section>

      <Container>
        <Row className="project-detail-page__links-row">
          <Col>
            <section className="project-detail-page__quick-links" aria-label="Quick links">
              <h2 className="project-detail-page__section-title">Quick Links</h2>
              <div className="project-detail-page__actions">
                <Button type="button" onClick={handleGoBack} variant="outline-secondary">
                  <span className="project-detail-page__back-icon" aria-hidden="true">
                    <svg viewBox="0 0 16 16" focusable="false">
                      <path d="M9.8 3.4 5.2 8l4.6 4.6" />
                    </svg>
                  </span>
                  Back
                </Button>
                <Button as={Link} to="/contact" variant="outline-secondary">
                  Contact Me
                </Button>
                <Button as="a" href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="primary">
                  View on GitHub
                </Button>
              </div>
            </section>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={7}>
            <Card className="project-detail-page__panel project-detail-page__panel--full-height">
              <Card.Body>
                <Card.Title className="project-detail-page__section-title">In-Depth Description</Card.Title>
                <Card.Text className="project-detail-page__text">{project.overview}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={5}>
            <Card className="project-detail-page__panel project-detail-page__panel--full-height">
              <Card.Body>
                <Card.Title className="project-detail-page__section-title">Highlights</Card.Title>
                <ListGroup variant="flush" className="project-detail-page__highlights">
                  {project.highlights.map(highlight => (
                    <ListGroup.Item key={highlight}>{highlight}</ListGroup.Item>
                  ))}
                </ListGroup>
                <h3 className="project-detail-page__tags-title">Technology Tags</h3>
                <div className="project-detail-page__tags">
                  {project.tags.map(tag => (
                    <Badge key={tag} pill className={`tag-pill ${getTagToneClass(tag)}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
