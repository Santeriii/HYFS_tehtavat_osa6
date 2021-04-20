import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)

    const voteFunction = (id) => {
        dispatch(vote(id))
    }

    return (
        <>
            {anecdotes
                .sort((a, b) => a.votes < b.votes ? 1 : -1)
                .map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => voteFunction(anecdote.id)}>vote</button>
                </div>
            </div>
          )}
        </>
    )
}

export default AnecdoteList