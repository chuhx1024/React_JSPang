import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class XiaojiejieItem extends Component {
    render() {
        return (
            <div>
                <li
                    onClick={this.handleClick}
                    >
                    {this.props.content}
                </li>
            </div>
        )
    }
    handleClick = () => {
        this.props.deleteItem()
    }
}

XiaojiejieItem.propTypes = {
    content: PropTypes.string
}