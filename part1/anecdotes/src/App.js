import React, { useState } from 'react'

const ButtonChange = (props) => {
  return (
    <div>
      <button onClick={props.number}>next anecdote</button>
    </div>
  )
}

const ButtonVote = (props) => {
  return (
    <>
      <button onClick={props.click}>vote</button>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0)
  const [array, setArray] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))
  const mostVoted = array.indexOf((Math.max(...array))) //Hier wird die Position gesucht, die am meisten Votes hat
  const anecdote =  () => {
    setSelected(Math.floor(Math.random()*6))
  }
  const handleCount = () => {
    const copy = [...array]
    copy[selected] += 1
    setArray(copy)
  }
  console.log(array, mostVoted)
 
  

  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      has {array[selected]} votes
      <ButtonChange number = {anecdote} />
      <ButtonVote click= {handleCount}/>
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVoted]}
      <br></br>
      has {array[mostVoted]} votes
    </div>
  )
}

export default App