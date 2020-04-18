const express = require('express');
const multer = require('multer');
const path = require('path');
const {nanoid} = require('nanoid');

const Picture = require('../models/Picture');
const config = require('../config');
const auth = require('../middleware/auth');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, config.uploadPath);
	},
	filename: (req, file, cb) => {
		cb(null, nanoid() + path.extname(file.originalname));
	}
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
	// try {
	// 	const pictures = await Picture.find().populate('user', '_id displayName');
	//
	// 	if (!pictures) {
	// 		return res.status(404).send({message: "Not found!"});
	// 	}
	// 	return res.send(pictures);
	// } catch (error) {
	// 	return res.status(404).send({message: "Not found", error});
	// }

	let query = {};

	if (req.query.user) {
		query.user = req.query.user;
	}
	try {
		const pictures = await Picture.find(query).populate('user');

		return res.send(pictures);
	} catch (error) {
		return res.status(404).send({message: 'Not found', error});
	}
});

router.get('/myPictures', auth, async (req, res) => {
	try {
		const pictures = await Picture.find({user: req.user._id}).populate('user', '_id displayName');

		if (!pictures) {
			return res.status(404).send({message: "Not found!"});
		}
		return res.send(pictures);
	} catch (error) {
		return res.status(404).send({message: "Not found", error});
	}
});

router.get('/:id', async (req, res) => {
	try {
		const picture = await Picture.findById(req.params.id);

		if (!picture) {
			return res.status(400).send({error: "Not found!"});
		}

		return res.send(picture);
	} catch (error) {
		return res.status(400).send({error: "Not found!"});
	}
});

router.post('/', [auth, upload.single('image')], async (req, res) => {
	const pictureData = req.body;

	if (req.file) {
		pictureData.image = req.file.filename;
	} else {
		return res.status(400).send({error: "Please select a picture"});
	}

	if (!pictureData.title) {
		return res.status(400).send({error: "Please enter a title"});
	}

	const picture = new Picture({
		title: pictureData.title,
		image: pictureData.image,
		user: req.user,
	});

	try {
		await picture.save();

		return res.send(picture);
	} catch (error) {
		return res.status(400).send(error);
	}
});

router.delete('/:id', auth, async (req, res) => {
	try {
		await Picture.deleteOne({_id: req.params.id});

		return res.send({message: 'Deleted successfully!'});
	} catch (error) {
		return res.status(400).send(error);
	}
});

module.exports = router;