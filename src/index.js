import React from 'react';
import ReactDOM from 'react-dom';



const Header = (props) => {
  return (
    <div>
      <h1>----{props.course}----</h1>
    </div>
  )
}

/*
const Content = (props) => {
  return (
    <div>
    <h3>-----Topics-----</h3>  
    <ul>
      <li>1 -{props.part1} : Exercises value: {props.exercises1}</li>
      <li>2 -{props.part2} : Exercises value: {props.exercises2}</li>
      <li>3 -{props.part3} : Exercises value: {props.exercises3}</li>
    </ul>
    </div>
  )
}*/

const Content = (props) => {
  return (
    <div>
    <h3>-----Topics-----</h3>  
    <Part num='1' part={props.part1}  exercises={props.exercises1}  />
    <Part num='2' part={props.part2}  exercises={props.exercises2} />
    <Part num='3' part={props.part3}  exercises={props.exercises3} />
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
      <p>Number of exercises:{props.total}</p>
    </div>
    )
}

const Part = (props) => {
  return (
    <div>
      <p>-{props.num}. {props.part} : Exercises value: {props.exercises}</p>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack aplicaction development'
  const part1 ='Fundamentals of react'
  const exercises1  = 10
  const part2 ='Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return(
    <div>
      <Header course={course}/>
      <Content 
      part1={part1}  exercises1={exercises1}
      part2={part2}  exercises2={exercises2} 
      part3={part3}  exercises3={exercises3}
      />
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}



ReactDOM.render(<App/>,document.getElementById('root'))

