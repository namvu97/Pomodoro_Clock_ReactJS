import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../redux/action'

class Controller extends Component {
    

    handleClickPlay = () => {
        this.props.togglePlay()

        if (this.interval) return

        this.interval = setInterval(() => {
            if (this.props.time <= 0) {
                clearInterval(this.interval)
                this.interval = undefined
                return
            }

            if (this.props.isPlay) this.props.reduceTime()
        }, 1000)
    }

    handleClickReset = () => {
        this.props.resetTime()
    }

    render() {
        return (
            <div className="bottom">
                <div className="box-item" onClick={this.handleClickPlay}>
                    {this.props.isPlay ?
                        <i className="fas fa-pause"></i>
                        :
                        <i className="fas fa-play"></i>
                    }
                </div>
                <div className="box-item" onClick={this.handleClickReset}>
                    <i className="fas fa-redo-alt" ></i>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        time: state.time,
        isPlay: state.isPlay,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reduceTime: () => {
            dispatch({ type: actions.REDUCE_TIME })
        },
        resetTime: () => {
            dispatch({ type: actions.RESET_TIME })
        },
        togglePlay: () => {
            dispatch({ type: actions.TOGGLE_PLAY })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller)