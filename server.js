const express = require('express');
const next = require('next');
const mysql = require('mysql');

// var db = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'cr3s3nd0',
//     database : 'nextjs1'
//   });

// db.connect()

const port = process.env.PORT || 3005;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then(()=>{
    const server = express()
    
    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err =>{
        if (err) throw err
        console.log(`> Ready on ${port}`);
    })
})
.catch(ex=>{
    console.error(ex.stack);
    process.exit(1)
})