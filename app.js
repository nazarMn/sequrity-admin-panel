const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Server work on port : ${PORT}`);
})