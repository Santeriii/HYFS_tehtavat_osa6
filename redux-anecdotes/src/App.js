import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const generateId = () => {
  Number((Math.random() * 10000).toFixed(0))
}

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

  const create = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    dispatch({
      type: 'NEW_ANECDOTE',
      data: {
        content,
        id: generateId(),
        votes: 0
      }
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
        .sort((a, b) => a.votes < b.votes ? 1 : -1)
        .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={create}>
        <div><input name='content'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App