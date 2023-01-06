const router = require('express').Router();
const uuid = require('../helpers/uuid');
const { readFileSync, readAndAppend } = require('../helpers/file')

router.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    const data = readFileSync('./db/db.json', 'utf8');
    res.json(JSON.parse(data));
});

router.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Tip added successfully`);
    } else {
      res.error('Error in adding note');
    }
});

module.exports = router;
