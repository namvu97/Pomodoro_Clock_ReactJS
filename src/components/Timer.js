import React, { Component } from 'react'

export default class Timer extends Component {

    // Mounting
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount() {
        console.log('componentDidMount')
    }

    // Updating
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        console.log('render')
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