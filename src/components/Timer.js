import React, { Component } from 'react'
import { connect } from 'react-redux'

class Timer extends Component {
    render() {
        return (
            <div className="main">
                <div className="circle-1">
                    <div className="circle-2">
                        <div className="circle-3">
                            <span>Session</span>
                            <div>{this.props.time}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        time: state.time,
    }
}

export default connect(mapStateToProps)(Timer)