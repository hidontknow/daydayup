import React,{Component} from 'react';
import hello from './index.module.css'; // 引入样式文件

//  创建并暴露组件
export default class Index extends Component {
    render() {
        return (
            <h2 className={hello.title}>hello react!</h2>
        )
    }
}