const express = require('express');
const next = require('next');
require('dotenv').config()

const port = 3005;
const dev = process.env.APP_ENV === 'local';
console.log('--- dev:', dev);
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
    });
    console.log('------ build success');
});
