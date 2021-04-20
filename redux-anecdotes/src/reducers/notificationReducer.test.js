import deepFreeze from 'deep-freeze'
import notificationReducer, { notificationChange } from './notificationReducer'

describe('redux-notification', () => {
    const initialState = 'empty'

    test('notification change works', () => {
        const state = initialState

        const action = notificationChange('working')

        deepFreeze(state)
        const newState = notificationReducer(state, action)
        expect(newState).toEqual('working')
    })
})