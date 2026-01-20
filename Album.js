const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    releaseDate: {
        type: Date,
        default: Date.now
    },
    genre: {
        type: String,
        required: true,
        enum: ['Pop', 'Rock', 'HipHop', 'Jazz', 'Electronic']
    },
    coverImage: String,
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }]
    }, { timestamps: true });

    module.exports = mongoose.model('Album', albumSchema);