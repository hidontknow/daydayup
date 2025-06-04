import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import './index.css'

class List extends Component {

  state = {
    users: [], // 存储用户列表
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 是否正在加载
    err: '' // 错误信息
  }

  componentDidMount() {
    // 订阅搜索结果
    this.token = PubSub.subscribe('search-result', (_, stateObj) => {
      this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users, isFirst, isLoading, err} = this.state;
    return (
      <div  className="row">
        {
          isFirst ? <h2>欢迎使用, 输入关键词搜索用户</h2> :
            isLoading ? <h2>正在加载中...</h2> :
              err ? <h2 style={{color: 'red'}}>{err}</h2> :
          users.map(user => (
            <div  key={user.id}  className="card">
              <a  rel="noreferrer" href={user.html_url} target="_blank">
                <img  src={user.avatar_url}  alt="head_portrait" style={{width: '100px'}}/>
              </a>
              <p  className="card-text">{user.login}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default List;