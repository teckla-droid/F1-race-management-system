const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/user');

dotenv.config();  // This loads environment variables from the .env file

(express()).use(express.json()); // For parsing application/json

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error connecting to MongoDB:", err));

const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
(express()).use(bodyParser.json());
(express()).use(cors());

// Basic route
(express()).get('/', (req, res) => {
    res.send('Server is running');
});

// Start server
const PORT = 5000;
(express()).listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

// Mock database for users
let users = [];
// Signup route with password hashing
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hashing the password
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

// Login route with password comparison
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password); // Comparing hashed password
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

