require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PWD}@cluster0.dose5wm.mongodb.net/gabbeth-D?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, {useNewUrlparser: true,})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
console.log(err)
})