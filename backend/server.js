const express = require('express')

app = express()

app.use('/', (req, res) =>{
	res.send('hello')
});

app.listen(8000, () => {console.log('Listening on port 8000')})
