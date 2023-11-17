// server.js
const express = require('express');
const mysql = require('mysql');
const app = express();

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'your_database_name'
});

// Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Select posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM your_table_name';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});