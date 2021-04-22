import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange, notificationReset } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = async (event) => {
        event.preventDefault()
        const content = event.target.content.value
        event.target.content.value = ''
        dispatch(createAnecdote(content))
        dispatch(notificationChange(`anecdote '${content}' created`))

        setTimeout(() => {
            dispatch(notificationReset())
        }, 5000)
    }
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={create}>
                <div><input name='content'/></div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm