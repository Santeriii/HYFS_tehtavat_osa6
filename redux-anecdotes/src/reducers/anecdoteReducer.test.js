import deepFreeze from 'deep-freeze'
import anecdoteReducer from './anecdoteReducer'

describe('redux-anecdotes', () => {
    const initialState = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

    test('voting works', () => {
        const action = {
            type: 'INITIALIZE',
            data: initialState
        }

        const newAnecdoteAction = {
            type: 'NEW_ANECDOTE',
            data: {
                content: 'test anecdote',
                id: 2,
                votes: 0
            }
        }

        const voteAction = {
            type: 'VOTE',
            data: {
                id: 2
            }
        }

        const state = initialState

        deepFreeze(state)
        const newState = anecdoteReducer(state, action)
        const anecdoteAddedState = anecdoteReducer(newState, newAnecdoteAction)
        const finalState = anecdoteReducer(anecdoteAddedState, voteAction)

        expect(finalState).toContainEqual({...newAnecdoteAction.data, votes: newAnecdoteAction.data.votes + 1})
    })
})