const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://root:3PqmA5PSN0h1OaZw@root.ojejf.mongodb.net/?retryWrites=true&w=majority&appName=root')
        console.log('Mongo DB connected')
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = connectDB;