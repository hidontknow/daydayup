import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
    state = {
        todos: [
            {
                id: '001',
                name: '吃饭',
                done: true
            },
            {
                id: '002',
                name: '睡觉',
                done: false
            },
            {
                id: '003',
                name: '打豆豆',
                done: false
            },
            {
                id: '004',
                name: '看电影',
                done: true
            }
        ]
    }

    // 添加todo
    addTodo = (todoObj) => {
        //获取原有的todos
        const {todos} = this.state;
        //添加一个todo
        const newTodos = [todoObj, ...todos];
        //更新状态
        this.setState({todos: newTodos})
    }

    // 修改todo
    updateTodo = (id, done) => {
        const {todos} = this.state;
        const newTodos = todos.map(todoObj => {
            if (todoObj.id === id) {
                return {...todoObj, done}
            } else {
                return todoObj;
            }

        });
        this.setState({todos: newTodos})
    }

    // 删除todo
    deleteTodo = (id) => {
        const {todos} = this.state;
        const newTodos = todos.filter(todoObj => {
            return todoObj.id !== id;
        });
        this.setState({todos: newTodos})
    }

    //  全选todo
    checkAllTodo = (done) => {
        const {todos} = this.state;
        const newTodos = todos.map(todoObj => {
            return {...todoObj, done}
        });
        this.setState({todos: newTodos})
    }

    // 删除所有已完成的todo
    clearAllDone = () => {
        const {todos} = this.state;
        const newTodos = todos.filter(todoObj => {
            return !todoObj.done;
        })
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        );
    }
}

// 暴露出App组件
export default App;
