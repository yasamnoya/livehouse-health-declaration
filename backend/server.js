require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
const app = express();

app.use(express.json());

const declarationsRouter = require('./routes/declarations')
app.use('/declarations', declarationsRouter);

app.listen(8000, () => {console.log('Listening on port 8000')});
