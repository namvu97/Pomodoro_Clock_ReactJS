import React, { Component } from 'react'
import Title from './components/Title'
import Timer from './components/Timer'
import Controller from './components/Controller'

export default class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            time: 10
        }
    }

    autoReduce = () => {
        let interval = setInterval(() => {
            if (this.state.time <= 0) return clearInterval(interval)
            this.reduceTime()
        }, 1000);
    }

    reduceTime = () => {
        let { time } = this.state
        this.setState({
            time: time - 1
        })
    }

    resetTimer = () => {
        this.setState({
            time: 10
        })
    }

    render() {
        return (
            <div>
                <Title />
                <Timer 
                    time={this.state.time} 
                    changeUserName={this.changeUserName}
                />
                <Controller
                    autoReduce={this.autoReduce}
                    resetTimer={this.resetTimer}
                />
            </div>
        )
    }
}