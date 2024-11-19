import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo2'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const [count, setCount] = useState(0)
  const actors = ["sakid", "Jasim", "Shoriful Raj", "Rubel", "Salman Shah"];
  const books = [
    { id: 1, name: "Physics", price: 100 },
    { id: 2, name: "Biology", price: 120 },
    { id: 3, name: "Chemistry", price: 130 },
    { id: 4, name: "Math", price: 150 }
  ]
  const singers = [
    {id: 1, name: "Dr.Mahfuzur Rahman", age: 72},
    {id: 2, name: "Eva Rahman", age: 28},
    {id: 3, name: "shuvro Dev", age: 36},
    {id: 4, name: "Pritom", age: 26},
  ]
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <BookStore books={books}></BookStore>
      <Actor name={"Bappa Raz"}></Actor>

      {
        singers.map((singer => <Singer singer={singer}></Singer>))
      }
      {
        actors.map((actor => <Actor name={actor}></Actor> ))
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core concepts" isDone={false}></Todo>
      <Todo task="Try jsx" isDone={true} ></Todo> */}
    </>
  )
}

export default App
