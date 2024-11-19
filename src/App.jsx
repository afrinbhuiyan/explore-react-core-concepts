import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core concepts" isDone={false}></Todo>
      <Todo task="Try jsx" isDone={true} ></Todo>
      {/* <Device name="laptop" price="80"></Device>
      <Device name="mobile" price="25"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score={87} ></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}
function Device(props) {
  // console.log(props);
  return <h2>This is devise: {props.name} price: {props.price} </h2>
}
function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "Sakib", age: 12 }
  return <h3>I am a {person.name} with age: {age + money}</h3>
}
const {grade, score} = {grade: '7', score: '99'}
function Student({grade=1, score=0}) {
  console.log(grade, score)
  return (
  <div className='student'>
  <h3>This is a student</h3>
  <p>Class: {grade} </p>
  <p>Score: {score} </p>
  </div>
  )
}
function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px",
    backgroundColor: "rgba(236, 200, 206, 0.267)"
  }
  return (
    <div style={developerStyle}>
      <h4>Devo Devo</h4>
      <p>Coding:</p>
    </div>
  )
}
export default App
