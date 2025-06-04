import React, {Component} from 'react';
import PubSub, { name } from 'pubsub-js';
import axios from "axios";

export default class Search extends Component {
  search = () => {
    // 获取用户输入的关键词(连续结构赋值+重命名)
    const {KeyWordElement:{value:keyWord}} = this;
    // 发送请求前通知List组件更新状态
    // this.props.updateAppState({
    //   isFirst: false,
    //   isLoading: true
    // });
    PubSub.publish("search-result", {
      isFirst: false,
      isLoading: true
    });

    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`)
      .then(res => {
        // 请求成功后通知List组件更新状态
        // this.props.updateAppState({
        //   isLoading: false,
        //   users: res.data.items
        // })
        PubSub.publish("search-result", {
          isLoading: false,
          users: res.data.items
        })
      })
      .catch(err => {
        // 请求失败后通知List组件更新状态
        // this.props.updateAppState({
        //   isLoading: false,
        //   err: err.message
        // })
        PubSub.publish("search-result", {
          isLoading: false,
          err: err.message
        })
      })
  }
  render() {
    return (
      <section  className="jumbotron">
        <h3  className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input  ref={c => this.KeyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}