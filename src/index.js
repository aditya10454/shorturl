const express = require('express');
const fs = require('fs');
const path = require('path');
const marked = require('marked');

const redirect = require('./controllers/redirects.controller');
const url = require('./controllers/url.controller');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    const readmePath = path.join(__dirname, '../README.md');

    fs.readFile(readmePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading README file.');
        }
        res.send(`
            <html>
                <head>
                    <title>API Documentation</title>
                    <style>
                        body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; line-height: 1.6; }
                        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; }
                        code { font-family: monospace; }
                    </style>
                </head>
                <body>
                    ${marked.parse(data)}
                </body>
            </html>
        `);
    });
});

app.use('/', redirect);
app.use('/', url);

module.exports = app;
