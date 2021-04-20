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

export const notificationChange = notification => {
    return {
        type: 'SET_NOTIFICATION',
        data: notification,
    }
}

export const notificationReset = () => {
    return {
        type: 'RESET_NOTIFICATION'
    }
}

export default notificationReducer