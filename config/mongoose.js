const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dk135781:qz2hFLVSSeu1wcFf@cluster3.jsk61aw.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;