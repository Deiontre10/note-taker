const fs = require('fs');
const id = require('uniqid');
const path = require('path');

const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => {
  res.send('Note Taker');
});

app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`)
);