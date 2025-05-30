import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import './index.css';

class Header extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    // 监听键盘按下事件
    handleKeyUp = (event) => {
        //解构赋值获取 keyCode 和 target
        const {keyCode,  target} = event;
        //判断是否是回车键
        if (keyCode !== 13) return;
        // 添加的内容不能为空
        if (target.value.trim().length === 0) {
            alert('添加的内容不能为空')
            return;
        }
        //准备好一个todo对象
        const todoObj = {
            id: nanoid(), //生成一个唯一的id
            name: target.value,
            done: false
        }
        // 将todoObj传递给App
        this.props.addTodo(todoObj);
        // 清空输入框
        target.value = '';
    };
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入任务名称, 按回车键确认"/>
            </div>
        );
    }
}

export default Header;