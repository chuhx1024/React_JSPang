import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class XiaojiejieItem extends Component {
    // 生命周期 start----------------------------
    componentWillReceiveProps () { 
        // 组件第一次存在于dom中 函数不会执行
        // 已经存在dom中  函数才会执行
        console.log('我要接受参数了')
    }
    componentWillUnmount () {
        console.log('Unmount')
    }
    // 生命周期 end------------------------------
    render() {
        console.log("我再渲染")
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