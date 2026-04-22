import { Badge, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getTagToneClass } from '../../utils/tagStyles.js'

export default function ProjectCard({ title, description, tags, slug, imageUrl, githubUrl }) {
  const navigate = useNavigate()

  function goToDetails() {
    navigate(`/projects/${slug}`)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      goToDetails()
    }
  }

  return (
    <Card
      className="project-card"
      role="button"
      tabIndex={0}
      onClick={goToDetails}
      onKeyDown={handleKeyDown}
    >
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={`${title} preview`}
        className="project-card__image"
      />
      <Card.Body className="project-card__body">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="project-card__description">{description}</Card.Text>
        <Button
          as="a"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          size="sm"
          className="project-card__github-link"
          onClick={event => event.stopPropagation()}
        >
          View on GitHub
        </Button>
        <div className="project-card__tags">
          {tags.map(tag => (
            <Badge key={tag} pill className={`tag-pill ${getTagToneClass(tag)}`}>
              {tag}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}