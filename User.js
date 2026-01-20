const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    favoriteSongs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
    favoriteArtists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],
    playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }]
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);