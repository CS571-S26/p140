import { Badge, Card } from 'react-bootstrap'

export default function ProjectCard({ title, description, tags }) {
  return (
    <Card className="project-card">
      <Card.Body className="project-card__body">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="project-card__description">{description}</Card.Text>
        <div className="project-card__tags">
          {tags.map(tag => (
            <Badge key={tag} bg="secondary" pill>
              {tag}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}