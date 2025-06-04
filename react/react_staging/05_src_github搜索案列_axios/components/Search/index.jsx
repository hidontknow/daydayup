import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {
  search = () => {
    // 获取用户输入的关键词(连续结构赋值)
    const {KeyWordElement:{value:keyWord}} = this;
    this.props.updateAppState({
      isFirst: false,
      isLoading: true
    });
    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`)
      .then(res => {
        this.props.updateAppState({
          isLoading: false,
          users: res.data.items
        })
      })
      .catch(err => {
        this.props.updateAppState({
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

export default Search;