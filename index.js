const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const { Item } = require('./models/Item')
const cors = require("cors");
const config = require('./config/key')

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect(config.mongoURI)
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log('Connected to Not MongoDB!!! :>> ', err))

app.get('/', (req, res) => res.send('Cooltrack'))


app.listen(port, () => console.log(`Listening on port ${port}`))
