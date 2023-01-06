const router = require('express').Router();
const uuid = require('./helpers/uuid');
const { readFileSync, readAndAppend } = require('./helpers/file')

router.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    const data = readFileSync('./db/db.json', 'utf8');
    res.json(JSON.parse(data));
  });