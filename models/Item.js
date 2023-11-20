const mongoose = require('mongoose')
const itemSchema = mongoose.Schema({
	id: {
		type: Number,
		unique: 1
	},
	category: {
		type: String,
		maxlength: 50
	},
	link: {
		type: String
	},
	imageSrc: {
		type: String
	},
	outline: {
		type: String
	},
	tags: {
		type: Array
	},
	shipping: {
		type: String,
		maxlength: 50
	},
	price: {
		type: String,
		maxlength: 50
	},
	ranking: {
		type: String,
		maxlength: 50
	},
})

const Item = mongoose.model('Item', itemSchema)

module.exports = { Item }
