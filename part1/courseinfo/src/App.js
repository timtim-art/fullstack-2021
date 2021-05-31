import React from 'react'

const Header = (props) => { //component Header; Variable auf die eine Arrow-Funktion zeigt. Funktion gibt den Wert der Variable zurück
  return (
    <div>
    <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => { //component Part; props geben die Werte in die Funktion, die den Wert der Variable bestimmt
  return (
    <div>
    {props.part} {props.exercises} 
    </div> //Hier werden zwei props übergeben. Einmal part und einmal exercises
  )
}

const Content = (props) => {

  let calc = props.parts.map(element => 
    element.exercises
  );

  let names = props.parts.map((element) => element.name)


  return (
    <div>
    <Part part={names[0]}  exercises={calc[0]}/>
    <Part part={names[1]}  exercises={calc[1]}/>
    <Part part={names[2]}  exercises={calc[2]}/>
    </div>
  )
}

const Total = (props) => {

  let calc = props.parts.map(element => 
    element.exercises
  );

  let result = calc.reduce((a,b) => a+b, 0)

  return (
    <div>
    <p>Number of exercises</p>{result}
    </div>//Hier wird ein prop übergeben. In der Variable App (root Funktion) sieht man, dass an das prop exercieses die Variablen exercises 1-3 übergeben werden
  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div> //Hier werden die Komponenten abgerufen und in der root Funktion App schlussendlich an die index.js übergeben
  )
}

export default App