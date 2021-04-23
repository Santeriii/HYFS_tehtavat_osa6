const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.data
        case 'RESET_NOTIFICATION':
            return null
        default:
            return state
    }
}

let timeoutID = null

export const notificationChange = (notification, time) => {
    return async dispatch => {
        if (timeoutID !== null) {
            clearTimeout(timeoutID)
            timeoutID = null
        }
        dispatch({
            type: 'SET_NOTIFICATION',
            data: notification,
        })
        timeoutID = setTimeout(() => {
            timeoutID = null
            dispatch({
                type: 'RESET_NOTIFICATION'
            })
        }, time)
    }
}

export default notificationReducer