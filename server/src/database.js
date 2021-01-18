const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log('Successfully connected to MongoDB'))
    .catch(err => console.log(err));