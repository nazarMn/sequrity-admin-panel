const mongoose = require('mongoose');
const sessionSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    userAgent: String,
    ipAddress: String,
    createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Session', sessionSchema);