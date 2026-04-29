import { useMemo, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ProjectCard from '../projects/ProjectCard.jsx'
import { projects } from '../../data/projects.js'

export default function ProjectsPageContent() {
  const [selectedTags, setSelectedTags] = useState(['All'])

  const availableTags = useMemo(() => {
    const tags = projects.flatMap(project => project.tags)

    return ['All', ...new Set(tags)]
  }, [])

  function handleTagClick(tag) {
    if (tag === 'All') {
      setSelectedTags(['All'])
      return
    }

    setSelectedTags(prevSelectedTags => {
      if (prevSelectedTags.includes('All')) {
        return [tag]
      }

      if (prevSelectedTags.includes(tag)) {
        const nextSelectedTags = prevSelectedTags.filter(selectedTag => selectedTag !== tag)
        return nextSelectedTags.length === 0 ? ['All'] : nextSelectedTags
      }

      return [...prevSelectedTags, tag]
    })
  }

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const hasAllSelected = selectedTags.includes('All')
      const tagMatch = hasAllSelected || selectedTags.every(tag => project.tags.includes(tag))

      if (!tagMatch) {
        return false
      }

      return true
    })
  }, [selectedTags])

  return (
    <Container className="projects-page">
      <Row className="projects-page__intro-row">
        <Col lg={8} className="projects-page__intro-col">
          <p className="projects-page__eyebrow">Projects</p>
          <h1 className="projects-page__title">What I&apos;ve Built</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="projects-page__tag-filters" role="group" aria-label="Project tag filters">
            {availableTags.map(tag => (
              <Button
                key={tag}
                type="button"
                size="sm"
                variant={selectedTags.includes(tag) ? 'primary' : 'outline-secondary'}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
                {selectedTags.includes(tag) && tag !== 'All' ? ' x' : ''}
              </Button>
            ))}
          </div>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} className="projects-page__grid">
        {filteredProjects.map(project => (
          <Col key={project.title}>
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              slug={project.slug}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
            />
          </Col>
        ))}
      </Row>

      {filteredProjects.length === 0 && (
        <Row>
          <Col>
            <p className="projects-page__empty-state">
              No projects match this tag yet. Add one or switch filters.
            </p>
          </Col>
        </Row>
      )}
    </Container>
  )
}