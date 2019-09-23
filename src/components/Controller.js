import React, { Component } from 'react'

export default class Controller extends Component {
    handleClickPlay = () => {
        this.props.autoReduce()
    }

    handleClickReset = () => {
        this.props.resetTimer()
    }

    render() {
        return (
            <div className="bottom">
                <div className="box-item">
                    <i className="fas fa-play" onClick={this.handleClickPlay}></i>
                </div>
                <div className="box-item">
                    <i className="fas fa-redo-alt" onClick={this.handleClickReset}></i>
                </div>
            </div>
        )
    }
}
