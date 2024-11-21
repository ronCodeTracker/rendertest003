const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

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
    console.log(`Server is running on http://localhost:${port}`);
});