const mongoose = require('mongoose');
const config = require('./config');
const {nanoid} = require('nanoid');

const User = require('./models/User');
const Picture = require('./models/Picture');

const run = async () => {
	await mongoose.connect(config.database, config.databaseOptions);

	const collections = await mongoose.connection.db.listCollections().toArray();

	for (let coll of collections) {
		await mongoose.connection.db.dropCollection(coll.name);
	}

	const [user, user2, user3] =  await User.create({
		username: 'user',
		password: '123',
		token: nanoid(),
		displayName: 'John Doe',
		avatar: 'fixtures/user.png',
	}, {
		username: 'user2',
		password: '123',
		token: nanoid(),
		displayName: 'Jack Daniels',
		avatar: 'fixtures/user.png',
	}, {
		username: 'user3',
		password: '123',
		token: nanoid(),
		displayName: 'Jane Blade',
		avatar: 'fixtures/user.png',
	});

	await Picture.create({
		title: 'Cat',
		image: 'fixtures/cat.jpg',
		user: user
	}, {
		title: 'Dog',
		image: 'fixtures/dog.jpg',
		user: user
	}, {
		title: 'Earth',
		image: 'fixtures/earth.jpg',
		user: user2
	}, {
		title: 'Nature',
		image: 'fixtures/nature.jpg',
		user: user2
	}, {
		title: 'Person',
		image: 'fixtures/person.jpeg',
		user: user3
	}, {
		title: 'Space',
		image: 'fixtures/space.jpg',
		user: user3
	});

	mongoose.connection.close();
};

run().catch(e => {
	mongoose.connection.close();
	throw e;
});