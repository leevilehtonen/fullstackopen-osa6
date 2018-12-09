const initialState = {
    message: 'Hello world',
    visible: false
}

const reducer = (store = initialState, action) => {
    if (action.type === 'NOTIFY') {
        return {
            message: action.content,
            visible: true
        }
    }
    if (action.type === 'HIDE') {
        return { ...store, visible: false }
    }
    return store
}

export const hideNotification = () => ({
    type: 'HIDE'
})

export const notify = (content, time) => async dispatch => {
    dispatch({ type: 'NOTIFY', content })
    setTimeout(() => dispatch({ type: 'HIDE' }), time * 1000)
}

export default reducer
