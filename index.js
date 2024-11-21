const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


// MySQL connection
const connection = mysql.createConnection({
    host: '198.12.235.32' , // Replace with your remote server address
    user: "Ronn", // Replace with your database username
    password: process.env.PASSWORD, // Replace with your database password
    database: "Valacyclovir Med Chart" // Replace with your database name
    //port: process.env.DB_PORT || 3306 // Add this line if your MySQL server uses a non-default port
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Successfully connected to the database!');
});




// Sample route to get user data
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    // Simulate fetching user data
    const user = { id: userId, name: 'John Doe' };
    res.json(user);
});

// Sample route to create a new user
app.post('/user', (req, res) => {
    const newUser = req.body;
    // Simulate saving user data
    newUser.id = Date.now();
    res.status(201).json(newUser);
});

// Sample route to update user data
app.put('/user/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    // Simulate updating user data
    updatedUser.id = userId;
    res.json(updatedUser);
});

// Sample route to delete a user
app.delete('/user/:id', (req, res) => {
    const userId = req.params.id;
    // Simulate deleting user data
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running:${port}`);
});