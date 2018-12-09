import React from 'react'
import { connect } from 'react-redux'
import AnecdotesService from './services/anecdotes'
import { initAnecdotes } from './reducers/anecdoteReducer'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

class App extends React.Component {
    componentDidMount = async () => {
        const anecdotes = await AnecdotesService.getAll()
        this.props.initAnecdotes(anecdotes)
    }
    render() {
        return (
            <div>
                <h1>Programming anecdotes</h1>
                <Notification />
                <AnecdoteList />
                <AnecdoteForm />
            </div>
        )
    }
}

export default connect(
    null,
    { initAnecdotes }
)(App)
