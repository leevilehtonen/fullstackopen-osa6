const initialState = {
    message: 'Hello world',
    visible: false
}

const reducer = (store = initialState, action) => {
    if (action.type === 'VOTE') {
        console.log(store)
        return {
            message: `you voted "${action.anecdote.content}"`,
            visible: true
        }
    }
    if (action.type === 'CREATE') {
        return {
            message: `you created "${action.content}"`,
            visible: true
        }
    }
    if (action.type === 'HIDE') {
        console.log(store)
        return { ...store, visible: false }
    }

    return store
}

export const hideNotification = () => ({
    type: 'HIDE'
})

export default reducer
