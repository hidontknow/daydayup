import React, {Component} from 'react';
import './App.css';
import axios from "axios";

export default class App extends Component {
    getStudentData = () => {
        axios.get('http://localhost:3000/api/students').then(
            response => {
                console.log('获取学生数据成功', response.data);
            },
            error => {
                console.error('获取学生数据失败', error);
            }
        )
    };
    getCarData = () => {
        axios.get('http://localhost:3000/api/cars').then(
            response => {
                console.log('获取车辆数据成功', response.data);
            },
            error => {
                console.error('获取车辆数据失败', error);
            }
        )
    };
    render() {
        return (
            <div>
                <botton onClick={this.getStudentData}>点我获取学生数据</botton>
                <botton onClick={this.getCarData}>点我获取车辆数据</botton>
            </div>
        );
    }
}
