const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    const databasePath = process.argv[2];
    countStudents(databasePath, (err, data) => {
        if (err) {
            res.status(500).send('Cannot load the database');
        } else {
            res.send(`This is the list of our students\n${data}`);
        }
    });
});

app.listen(1245, () => {
    console.log('Server listening on port 1245');
});

module.exports = app;
