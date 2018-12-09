import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import Filter from './Filter'

class AnecdoteList extends React.Component {
    render() {
        return (
            <div>
                <h2>Anecdotes</h2>
                <Filter />
                {this.props.anecdotesToShow
                    .sort((a, b) => b.votes - a.votes)
                    .map(anecdote => (
                        <div key={anecdote.id}>
                            <div>{anecdote.content}</div>
                            <div>
                                has {anecdote.votes}
                                <button
                                    onClick={() => {
                                        this.props.voteAnecdote(anecdote)
                                        this.props.notify(
                                            `you voted: "${anecdote.content}"`,
                                            5
                                        )
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

const anecdotesToShow = (anecdotes, filter) =>
    anecdotes.filter(anecdote =>
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )

const mapStateToProps = state => ({
    anecdotesToShow: anecdotesToShow(state.anecdotes, state.filter)
})

export default connect(
    mapStateToProps,
    { voteAnecdote, notify }
)(AnecdoteList)
