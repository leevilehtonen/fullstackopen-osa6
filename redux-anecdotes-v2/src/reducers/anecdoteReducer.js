const reducer = (store = [], action) => {
    if (action.type === 'INIT_ANECDOTES') {
        return action.data
    }
    if (action.type === 'VOTE') {
        const old = store.filter(a => a.id !== action.anecdote.id)
        const voted = store.find(a => a.id === action.anecdote.id)

        return [...old, { ...voted, votes: voted.votes + 1 }]
    }
    if (action.type === 'CREATE') {
        return [...store, action.anecdote]
    }

    return store
}

export const createAnecdote = anecdote => ({
    type: 'CREATE',
    anecdote
})
export const voteAnecdote = anecdote => ({
    type: 'VOTE',
    anecdote
})
export const initAnecdotes = data => ({ type: 'INIT_ANECDOTES', data })

export default reducer
