require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();

app.use('/', (req, res) =>{
	res.send('hello');
});

app.listen(8000, () => {console.log('Listening on port 8000')});
