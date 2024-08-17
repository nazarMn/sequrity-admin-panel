const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Session = require('../models/Session');

exports .login = async (req, res) => {
    const { username, password} = req.body;

    const user = await User.findOne({ username });

    if (!user || !(await user.comparePassword(password))) {
        res.status.status(401).json({ message: 'Invalide crefentails' });
    }

    const token = jwt.sign({ id: user._Id }, 'my_secret_token', { expiresIn: '1h'});

    await new Session({
        userId: user._id,
        ipAddress: req.ip,
        userAgent: req.headers['user_agent']
    }).save();

    res.cookie('token', token, { httpOnly: true });
    req.redirect('/dashboard');
}