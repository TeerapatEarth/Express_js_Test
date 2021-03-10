const express = require('express');
const cors = require('cors')
const app = express()
const port = 8888
const hello = require('./routes/hello')

app.use(cors())

app.use('/hello', hello)

app.listen(port, () => {
    console.log('server started at port ' + port)
})