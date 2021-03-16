const express = require('express');
const app = express();

app.use(express.json());

const declarationsRouter = require('./routes/declarations')
app.use('/declarations', declarationsRouter);

module.exports = app;
