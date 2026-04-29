import { Carousel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects.js'

const featuredProjects = projects.slice(0, 3)

export default function FeaturedProjectsCarousel() {
  const navigate = useNavigate()

  function handleSlideClick(slug) {
    navigate(`/projects/${slug}`)
  }

  function handleKeyDown(event, slug) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleSlideClick(slug)
    }
  }

  return (
    <Carousel className="home-page__carousel" indicators={true} interval={15000} pause="hover">
      {featuredProjects.map(project => (
        <Carousel.Item key={project.slug}>
          <div
            className="home-page__carousel-slide"
            style={{ backgroundImage: `linear-gradient(135deg, rgba(12, 20, 28, 0.18), rgba(12, 20, 28, 0.72)), url(${project.imageUrl})` }}
            role="button"
            tabIndex={0}
            onClick={() => handleSlideClick(project.slug)}
            onKeyDown={event => handleKeyDown(event, project.slug)}
          >
            <Carousel.Caption className="home-page__carousel-caption">
              <p className="home-page__carousel-eyebrow">Featured Project</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
