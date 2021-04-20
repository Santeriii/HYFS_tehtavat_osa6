import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notificationChange, notificationReset } from '../reducers/notificationReducer'
import Notification from './Notification'
import Filter from './Filter'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const notification = useSelector(state => state.notification)
    const filter = useSelector(state => state.filter)

    const voteFunction = (id) => {
        dispatch(vote(id))
        dispatch(notificationChange(`you voted '${anecdotes.find(a => a.id === id).content}'`))

        setTimeout(() => {
            dispatch(notificationReset())
        }, 5000)
    }

    return (
        <>
            {notification &&
                <Notification />
            }
            <Filter />
            {anecdotes
                .filter(a => a.content.includes(filter.filter))
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