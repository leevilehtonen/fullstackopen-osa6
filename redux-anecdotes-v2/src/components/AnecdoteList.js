import React from 'react'
import AnecdotesService from '../services/anecdotes'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { hideNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import Filter from './Filter'

class AnecdoteList extends React.Component {
    addVote = async anecdote => {
        await AnecdotesService.update({
            ...anecdote,
            votes: anecdote.votes + 1
        })
        this.props.voteAnecdote(anecdote)
        setTimeout(() => {
            this.props.hideNotification()
        }, 5000)
    }
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
                                        this.addVote(anecdote)
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
    { voteAnecdote, hideNotification }
)(AnecdoteList)
