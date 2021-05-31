import React, { useState } from 'react'

// a proper place to define a component
const Statistics = (props) => {
  if (props.sum === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
  return(
    <div>
      <table>
      <thead></thead>
      <tbody>
      <tr><td><Statistic text = {props.text1} /></td><td><Statistic value = {props.good} /></td></tr>
      <tr><td><Statistic text = {props.text2} /></td><td><Statistic value = {props.neutral} /></td></tr>
      <tr><td><Statistic text = {props.text3} /></td><td><Statistic value = {props.bad} /></td></tr>
      <tr><td><Statistic text = {props.text4} /></td><td><Statistic value = {props.sum} /></td></tr>
      <tr><td><Statistic text = {props.text5} /></td><td><Statistic value = {props.average} /></td></tr>
      <tr><td><Statistic text = {props.text6} /></td><td><Statistic value = {props.positive} text = "%"/></td></tr>
      </tbody>
      </table>
    </div>
    )}
}

const Statistic = (props) => {
  return (
    <>
      {props.value}{props.text}
    </>
  )
}

const Button = (props) => {
  return(
  <div>
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  </div>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicksValue, setAll] =useState(0)
  const [sumOfClicks, setSumOfClicks] = useState(0) 
  const positive = good/sumOfClicks*100

  const Good = () => {
    setSumOfClicks(sumOfClicks+1)
    setAll(clicksValue+1)
    setGood(good+1)
  } 

  const Neutral = () => {
    setSumOfClicks(sumOfClicks+1)
    setAll(clicksValue)
    setNeutral(neutral+1)
  } 

  const Bad = () => {
    setSumOfClicks(sumOfClicks+1)
    setAll(clicksValue-1)
    setBad(bad+1)
  } 

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={Good} text={"good"} />
      <Button handleClick={Neutral} text={"neutral"} />
      <Button handleClick={Bad} text={"bad"} />
      <h1>statistics</h1>
      <Statistics 
      good = {good} 
      text1 = {"good"} 
      neutral = {neutral} 
      text2 = {"neutral"} 
      bad = {bad} 
      text3 = {"bad"} 
      sum = {sumOfClicks} 
      text4 = {"all"} 
      average = {clicksValue/sumOfClicks} 
      text5={"average"} 
      positive = {positive} 
      text6={"positive"} />
    </div>
  )
}

export default App