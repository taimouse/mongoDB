const express = require('express')
const app = express()
const port = 5000
const dbAdress = 'mongodb+srv://cooltrack:sosocool@atlascluster.3jxhapi.mongodb.net/?retryWrites=true&w=majority'
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { Item } = require('./models/Item')
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect(dbAdress)
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log('Connected to MongoDB!!! :>> ', err))

app.get('/', (req, res) => res.send('Cooltrack'))

app.get('/items', (req, res) => {
	Item.find()
			.then(items => {
					res.status(200).json(items);
			})
			.catch(err => {
					res.status(500).send('Error occurred while fetching items', err);
			});
});

app.post('/list', (req, res) => {
	const item = new Item(req.body)
	item.save()
	.then(savedItem => {
		console.log('Item saved successfully: ', savedItem);
		res.status(200).send('Item saved successfully!');
	})
	.catch(err => {
			console.log('Error while saving the item: ', err);
			res.status(500).send('Item could not be saved');
	});
})

app.listen(port, () => console.log(`Listening on port ${port}`))
