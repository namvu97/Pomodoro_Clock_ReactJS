import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'

import Title from './components/Title'
import Timer from './components/Timer'
import Controller from './components/Controller'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Title/>
                <Timer/>
                <Controller/>
            </Provider>
        )
    }
}