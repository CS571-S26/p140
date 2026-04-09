import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProjectCard from '../projects/ProjectCard.jsx'

const projectCards = [
  {
    title: 'Featured Project One',
    description:
      'A place to highlight a project that solved a real problem, with a short summary of the goal, tools used, and outcome.',
    tags: ['React', 'Bootstrap', 'UI Design'],
  },
  {
    title: 'Featured Project Two',
    description:
      'A place to highlight a project that solved a real problem, with a short summary of the goal, tools used, and outcome.',
    tags: ['React', 'Bootstrap', 'UI Design'],
  },
  {
    title: 'Featured Project Three',
    description:
      'A place to highlight a project that solved a real problem, with a short summary of the goal, tools used, and outcome.',
    tags: ['React', 'Bootstrap', 'UI Design'],
  },
]

export default function ProjectsPageContent() {
  return (
    <Container className="projects-page">
      <Row className="projects-page__intro-row">
        <Col lg={8} className="projects-page__intro-col">
          <p className="projects-page__eyebrow">Projects</p>
          <h1 className="projects-page__title">Page Description Placeholder.</h1>
          <p className="projects-page__lead">
            A little bit of information about me placeholder
          </p>
          <Button as={Link} to="/about" variant="primary">
            Learn more about me
          </Button>
        </Col>
      </Row>

      <Row xs={1} md={3} className="projects-page__grid" >
        {projectCards.map(project => (
          <Col key={project.title}>
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}