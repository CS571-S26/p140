import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects.js'

const projectRoutes = projects.map(project => `/projects/${project.slug}`)

export default function FeelingLuckyButton({ className = '', variant = 'outline-secondary', size }) {
  const navigate = useNavigate()

  function goRandom() {
    const secretRoll = Math.floor(Math.random() * 100)

    if (secretRoll === 0) {
      navigate('/secret')
      return
    }

    const randomIndex = Math.floor(Math.random() * projectRoutes.length)
    navigate(projectRoutes[randomIndex])
  }

  return (
    <span className="feeling-lucky-button-shell">
      <span className="feeling-lucky-button-pop" aria-hidden="true">
        Where could this lead?
      </span>
      <Button
        type="button"
        variant={variant}
        size={size}
        className={className}
        onClick={goRandom}
      >
        I&apos;m Feeling Lucky
      </Button>
    </span>
  )
}
