import { useState } from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getTagToneClass } from '../../utils/tagStyles.js'
import { readJsonCookie, writeJsonCookie } from '../../utils/cookieStore.js'

const PROJECT_LIKE_COOKIE_PREFIX = 'codefolio-project-like-'

function getProjectLikeCookieKey(slug) {
  return `${PROJECT_LIKE_COOKIE_PREFIX}${slug}`
}

function readProjectLikeState(slug) {
  return readJsonCookie(getProjectLikeCookieKey(slug), {
    liked: false,
    likeCount: 0,
  })
}

export default function ProjectCard({ title, description, tags, slug, imageUrl, imageAlt, githubUrl }) {
  const navigate = useNavigate()
  const [likeState, setLikeState] = useState(() => readProjectLikeState(slug))

  function goToDetails() {
    navigate(`/projects/${slug}`)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      goToDetails()
    }
  }

  function handleLikeClick(event) {
    event.stopPropagation()

    const nextLikeState = {
      liked: !likeState.liked,
      likeCount: likeState.liked ? 0 : 1,
    }

    setLikeState(nextLikeState)
    writeJsonCookie(getProjectLikeCookieKey(slug), nextLikeState)
  }

  return (
    <Card
      className="project-card"
      role="button"
      tabIndex={0}
      onClick={goToDetails}
      onKeyDown={handleKeyDown}
    >
      <Button
        type="button"
        className={`project-card__like-button${likeState.liked ? ' project-card__like-button--liked' : ''}`}
        variant="light"
        aria-label={`${likeState.liked ? 'Unlike' : 'Like'} ${title}`}
        aria-pressed={likeState.liked}
        onClick={handleLikeClick}
      >
        <span className="project-card__like-icon" aria-hidden="true">
          {likeState.liked ? '♥' : '♡'}
        </span>
        <span className="project-card__like-count">{likeState.likeCount}</span>
      </Button>
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={imageAlt || `${title} preview`}
        className="project-card__image"
      />
      <Card.Body className="project-card__body">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="project-card__description">{description}</Card.Text>
        <Button
          as="a"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
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