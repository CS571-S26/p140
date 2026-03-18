import '../App.css'
import { Card } from 'react-bootstrap'

export default function AboutPage() {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Card className='m-4 p-2'>
        <Card.Body className='text-center'>
          <h2>About</h2> 
          <p>Example declarative routing with react-router-dom.</p>
        </Card.Body>
      </Card>
    </div>
  )
}
