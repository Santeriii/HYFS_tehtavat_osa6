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

export const notificationChange = (notification, time) => {
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            data: notification,
        })
        setTimeout(() => {
            dispatch({
                type: 'RESET_NOTIFICATION'
            })
        }, time)
    }
}

export default notificationReducer