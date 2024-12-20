const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' folder (CSS, JS, and other assets)
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../assets')));

// Default route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve additional HTML files from the 'public/html' directory
app.get('/:page', (req, res) => {
    const page = req.params.page;
    const filePath = path.join(__dirname, `../public/html/${page}.html`);
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('404 Error: File Not Found');
        }
    });
});

// Catch-all route for undefined paths
app.use((req, res) => {
    res.status(404).send('404 Error: Page Not Found');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
