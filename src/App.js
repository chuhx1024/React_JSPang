import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <ul className="my-list">
                <li>{false? '我好':'你好'}</li>
                <li>你好</li>
                <li>你好</li>
                <li>你好</li>
            </ul>
        )
    }
}
