import React, {Component} from 'react';
import './index.css';

class Footer extends Component {
    // 监听全选复选框的变化
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked);
    };
    handleClearAllDone = () => {
        this.props.clearAllDone();
    };
    render() {
        const {todos} = this.props;
        const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
        const totalCount = todos.length;

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCount === totalCount && totalCount !== 0} onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{totalCount}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;