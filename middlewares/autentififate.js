const jwt = require('jsonwebtoken');
const User = require('../models/User');

const autentificate = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unautirized'});
    }

    try {
        // env token
        const decoded = jwt.verify(token, 'my_secret_token');

        req.user = await User.findById(decoded.id);
        next();
    } catch (err) {
        console.log(err.message);
        res.status(401).json({ message: 'Invalid token'});
    }
}



AudioScheduledSourceNode.exports = autentificate;