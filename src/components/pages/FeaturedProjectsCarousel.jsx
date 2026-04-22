import { Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects.js'

const featuredProjects = projects.slice(0, 3)

export default function FeaturedProjectsCarousel() {
  return (
    <Carousel className="home-page__carousel" indicators={true} interval={15000} pause="hover">
      {featuredProjects.map(project => (
        <Carousel.Item key={project.slug}>
          <div
            className="home-page__carousel-slide"
            style={{ backgroundImage: `linear-gradient(135deg, rgba(12, 20, 28, 0.18), rgba(12, 20, 28, 0.72)), url(${project.imageUrl})` }}
          >
            <Carousel.Caption className="home-page__carousel-caption">
              <p className="home-page__carousel-eyebrow">Featured Project</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="home-page__carousel-actions">
                <Button as={Link} to={`/projects/${project.slug}`} variant="primary">
                  View project
                </Button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
