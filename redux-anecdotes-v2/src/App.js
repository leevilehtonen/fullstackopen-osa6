import React from 'react'
import { Provider } from 'react-redux'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

class App extends React.Component {
    render() {
        console.log(this.props.store.getState())
        return (
            <Provider store={this.props.store}>
                <div>
                    <h1>Programming anecdotes</h1>
                    <Notification />
                    <AnecdoteList />
                    <AnecdoteForm />
                </div>
            </Provider>
        )
    }
}

export default App
