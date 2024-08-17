const Session = require('../models/Session');

exports.getAllSessions = async (req, res)=>{
    const session = await Session.find().populate('userId', 'username');
    res.json(sessions);
}

exports.deleteUsersession = async (req, res)=>{
    const sessionId = req.params.sessionId;
    await Session.findByIdAndDelete(sessionId);
    res.status(200).json({ message: 'User session terminated' });
}