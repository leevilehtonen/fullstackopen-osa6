const initialState = ''

const reducer = (store = initialState, action) => {
    if (action.type === 'FILTER') {
        return action.content
    }
    return store
}

export const applyFilter = content => ({
    type: 'FILTER',
    content
})

export default reducer
