const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();

app.use('/', (req, res) =>{
	res.send('hello');
});

app.listen(8000, () => {console.log('Listening on port 8000')});
