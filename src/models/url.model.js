const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
    urlCode: {
        type: String,
        required: true
    },
    longUrl: {
        type: String,
        required: true
    },  
    date: {
        type: Date,
        default: Date.now,
        expires: 2592000
    }
},
{
    versionKey: false,
    timestamps: false,
});

const URLModel = mongoose.model('Url', URLSchema);
module.exports = { URLModel };
