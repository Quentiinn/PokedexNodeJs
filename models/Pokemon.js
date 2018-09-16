var mongoose = require('mongoose');

var pokemonsSchema = new mongoose.Schema({
	name: String,
	number: Number,
	description: String,
	picture: String,
	type:[
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Type'
		}
	]
});

var Pokemon = mongoose.model('Pokemon' , pokemonsSchema);

module.exports = Pokemon;
