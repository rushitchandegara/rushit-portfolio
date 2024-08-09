const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "assets" directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve static files from the "images" directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve the index.html file for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

