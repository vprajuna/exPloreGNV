const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const authenticateToken = require('./routes/auth');

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({ // sql db connection
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'exploregnv'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`); // start the server
  });