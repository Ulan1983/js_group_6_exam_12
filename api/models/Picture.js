const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PictureSchema = new Schema({
	user: {
		type: Schema.Types.ObjectID,
		ref: 'User',
		required: true
	},
	title: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	}
});

const Picture = mongoose.model('Picture', PictureSchema);

module.exports = Picture;