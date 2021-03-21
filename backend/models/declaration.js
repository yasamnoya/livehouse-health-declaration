const mongoose = require('mongoose');

const declarationSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	phone:{
		type: String,
		required: true
	},
	submitDate: {
		type: Date,
		required: true,
		default: Date.now
	}
});

module.exports = mongoose.model('Declaration', declarationSchema);
