const express = require('express')
const app = express()
const port = 3000

var path = require('path');

var visitors = 0;
const fs = require('fs');

// var bodyParser = require('body-parser')
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// // parse application/json
// app.use(bodyParser.json())


const Users = require('./models/User');

app.use(express.static(__dirname+ '/public'))



app.get('/', (req, res) => {
    visitors = visitors + 1
    console.log('user visted homepage', visitors)


    var options = {
        root: path.join(__dirname)
    };
    var fileName = 'index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})

var users = []

fs.readFile('users.json', 'utf8', (err, jsonString) => {
    const data = JSON.parse(jsonString)
    users = data;
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello Bangkok University Students;');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });