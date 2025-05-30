const express = require('express')
const {response} = require("express");
const app = express()
const port = 5001

app.use((req, res, next)=>{
    console.log("有人访问了服务器2")
    console.log('请求来自于:', req.get('Host'))
    console.log('请求的地址:', req.url)
    next()
})

app.get('/cars', (req, res) => {
    const cars = [
        {id: 1, name: ' Audi A6', price: 28000},
        {id: 2, name: 'BMW X5', price: 45000},
        {id: 3, name: 'Mercedes-Benz C-Class', price: 32000}
    ]

    res.send(cars)
})

app.listen(port, (err) => {
    if (!err) {
        console.log(`服务器2启动成功了, 端口: ${port}`)
    }
})
