const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const authenticateToken = require('./routes/auth');

const app = express();
const port = 3001;
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

app.post('/signup', (req, res) => { // user signup route
    const { username, password } = req.body;
  
    if (!username.endsWith('@gmail.com')) {
      return res.status(400).json({ message: 'Your username must end in @gmail.com.'});
    }
  
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }
  
      if (results.length > 0) {
        return res.status(400).json({ message: 'Account with email already exists. Please log in.' });
      }
  
      db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (insertErr, result) => {
        if (insertErr) {
          return res.status(500).json({ message: 'Error creating account' });
        }
  
        res.status(201).json({ message: 'Account created successfully' });
      });
    });
});

app.post('/login', (req, res) => { // user login route
    const { username, password } = req.body;
  
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }
  
      if (results.length === 0) {
        return res.status(400).json({ message: 'Username and/or password is incorrect or does not exist' });
      }
  
      const user = results[0];
      const token = jwt.sign({ userId: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
  
      res.status(200).json({ message: 'Login successful', token });
    });
});

app.get('/attractions', (req, res) => { // get attractions route
  const query = 'SELECT * FROM attractions';

  db.query(query, async (err, results) => {
    if (err) {
      console.error('Error fetching attractions:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    res.status(200).json(results);
  });
});

app.post('/liked-attractions', (req, res) => { // store liked attraction route
  const { userId, attractionId } = req.body;

  if (!userId || !attractionId) {
    return res.status(400).json({ error: 'Missing userId or attractionId' });
  }

  const checkQuery = `SELECT * FROM liked_attractions WHERE user_id = ? AND attraction_id = ?`;
  db.query(checkQuery, [userId, attractionId], (checkErr, checkResults) => {
    if (checkErr) {
      console.error('Check error:', checkErr);
      return res.status(500).json({ error: 'Database error during check' });
    }

    if (checkResults.length > 0) {
      return res.status(200).json({ message: 'Attraction already liked by user' });
    }

    const insertQuery = `INSERT INTO liked_attractions (user_id, attraction_id) VALUES (?, ?)`;
    db.query(insertQuery, [userId, attractionId], (insertErr, result) => {
      if (insertErr) {
        console.error('Insert error:', insertErr);
        return res.status(500).json({ error: 'Failed to like attraction' });
      }

      res.status(201).json({ message: 'Attraction liked successfully' });
    });
  });
});
 

// get liked attractions route

app.listen(port, () => {
    console.log(`Server running on port ${port}`); // start the server
  });