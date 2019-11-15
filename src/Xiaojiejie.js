import React, { Component, Fragment } from 'react'
import XiaojiejieItem from './XiaojiejieItem'

export default class Xiaojiejie extends Component {
    constructor (props) {
        super(props)
        this.state = {
            inputValue: '默认',
            list: ['头部按钮', '精油推背']
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input 
                        value={this.state.inputValue}
                        onChange={this.inputChange}
                    />
                    <button onClick={this.addList}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                // <li 
                                //     key={index}
                                //     onClick={()=>{this.deleteItem(index)}}
                                //     >
                                //     {item}
                                // </li>
                                <XiaojiejieItem
                                    key={index}
                                    content={item}
                                    deleteItem={()=>{this.deleteItem(index)}}
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange =  (e) => {
        this.setState({
            inputValue: e.target.value
        })

    }
    // 增加列表的方法
    addList = () => {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    // 删除的方法
    deleteItem = (index) => {
        console.log(index)
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list
        })
    }
}
