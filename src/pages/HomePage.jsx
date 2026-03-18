import { useState } from 'react'
import '../App.css'
import { Button, Card } from 'react-bootstrap'

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Card className='m-4 p-2'>
        <Card.Body className='text-center'>
          <h1>Hello World!</h1>
          <Button onClick={() => setCount(o => o + 1)}>Count: {count}</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
