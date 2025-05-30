const express = require('express')
const {response} = require("express");
const app = express()
const port = 5000

app.use((req, res, next)=>{
    console.log("有人访问了服务器1")
    console.log('请求来自于:', req.get('Host'))
    console.log('请求的地址:', req.url)
    next()
})

app.get('/students', (req, res) => {
    const students = [
        {id: 1, name: '张三', age: 18},
        {id: 2, name: '李四', age: 19},
        {id: 3, name: '王五', age: 20}
    ]

    res.send(students)
})

app.listen(port, (err) => {
    if (!err) {
        console.log(`服务器1启动成功了, 端口: ${port}`)
    }
})
