import { useState } from 'react'
import './App.css'
import { closestCorners, DndContext } from '@dnd-kit/core'
import { Column } from './components/Column/Column';

function App() {
  // const [count, setCount] = useState(0)
  // const [meows, setMeows] = useState([
  //   { id: 1, title: "Protection of infant (sunrise) industries"},
  //   { id: 2, title: "National security"},
  //   { id: 3, title: "Maintenance of health and safety"},
  // ]);

  return (
    <>
      <h1>ARGGG</h1>
      <DndContext collisionDetection={closestCorners}>
        <Column meows={meows} />
      </DndContext>
      {/* <script src="https://unpkg.com/konva@9/konva.min.js"></script> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          amirite {count}
        </button>
        <p>
          Drag and drop arguments, click amirite to see if you are right.
        </p>
      </div>
    </>
  )
}

export default App
