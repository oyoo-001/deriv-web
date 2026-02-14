require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const APP_ID = process.env.APP_ID;
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.get(express.static(path.join(__dirname, 'public', 'favicon.png')));
app.get('/login', (req, res) => {
    const derivLoginUrl = `https://oauth.deriv.com/oauth2/authorize?app_id=${APP_ID}&l=EN&brand=deriv`;
    res.redirect(derivLoginUrl);
});

app.get('/callback', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/config', (req, res) => {
    res.json({ appId: APP_ID });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});