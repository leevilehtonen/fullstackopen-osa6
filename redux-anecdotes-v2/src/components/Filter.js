import React from 'react'
import { applyFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

class Filter extends React.Component {
    handleChange = event => {
        this.props.applyFilter(event.target.value)
    }
    render() {
        const style = {
            marginBottom: 10
        }

        return (
            <div style={style}>
                filter <input onChange={this.handleChange} />
            </div>
        )
    }
}

export default connect(
    null,
    { applyFilter }
)(Filter)
