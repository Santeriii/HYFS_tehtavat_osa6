import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
    const create = async (event) => {
        event.preventDefault()
        const content = event.target.content.value
        event.target.content.value = ''
        props.createAnecdote(content)
        props.notificationChange(`anecdote '${content}' created`, 5000)
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

const mapDispatchToProps = {
    createAnecdote,
    notificationChange
}

const ConnectedAnecdoteForm = connect(
    null,
    mapDispatchToProps
)(AnecdoteForm)
export default ConnectedAnecdoteForm