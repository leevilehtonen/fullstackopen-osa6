import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'

class AnecdoteList extends React.Component {
    render() {
        const filter = this.props.store.getState().filter
        const anecdotes = this.props.store
            .getState()
            .anecdotes.filter(anecdote =>
                anecdote.content.toLowerCase().includes(filter.toLowerCase())
            )

        console.log(filter)
        return (
            <div>
                <h2>Anecdotes</h2>
                {anecdotes
                    .sort((a, b) => b.votes - a.votes)
                    .map(anecdote => (
                        <div key={anecdote.id}>
                            <div>{anecdote.content}</div>
                            <div>
                                has {anecdote.votes}
                                <button
                                    onClick={() => {
                                        this.props.store.dispatch(
                                            voteAnecdote(anecdote)
                                        )
                                        setTimeout(() => {
                                            this.props.store.dispatch({
                                                type: 'HIDE'
                                            })
                                        }, 5000)
                                    }}
                                >
                                    vote
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }
}

export default AnecdoteList
