import React, {Component} from 'react';
import Search from './components/Search';
import List from './components/List';

export default class App extends Component {
  state = {
    users: [], // 存储用户列表
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 是否正在加载
    err: '' // 错误信息
  }

  updateAppState = (stateObj) => {
    this.setState(stateObj);
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    );
  }
}
