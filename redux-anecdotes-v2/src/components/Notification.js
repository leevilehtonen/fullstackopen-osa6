import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component {
    render() {
        const style = {
            border: 'solid',
            padding: 10,
            borderWidth: 1
        }
        if (this.props.notification.visible) {
            return <div style={style}>{this.props.notification.message}</div>
        }
        return null
    }
}
const mapStateToProps = state => ({ notification: state.notification })

export default connect(mapStateToProps)(Notification)
