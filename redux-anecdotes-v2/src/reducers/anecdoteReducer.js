import AnecdotesService from '../services/anecdotes'

const reducer = (store = [], action) => {
    if (action.type === 'INIT_ANECDOTES') {
        return action.anecdotes
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

export const createAnecdote = content => async dispatch => {
    const anecdote = await AnecdotesService.createNew(content)
    dispatch({
        type: 'CREATE',
        anecdote
    })
}

export const voteAnecdote = anecdote => async dispatch => {
    await AnecdotesService.update({
        ...anecdote,
        votes: anecdote.votes + 1
    })
    dispatch({
        type: 'VOTE',
        anecdote
    })
}
export const initAnecdotes = () => async dispatch => {
    const anecdotes = await AnecdotesService.getAll()
    dispatch({ type: 'INIT_ANECDOTES', anecdotes })
}

export default reducer
