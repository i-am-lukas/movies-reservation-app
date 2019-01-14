var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: String,
    description: String,
    minAge: Number,
    poster: String,
}, {
        collection: 'movies'
    })

const seatsSchema = new Schema({
    name: {
        type:String,
        required: true,
        minlength: 3,
        maxlength: 25
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    time: {type: String,
            required: true
    },
    isOccupied: {type: Array,
                default: [false, false, false, false, false]
    }
}, {
        collection: 'seats'
    })

module.exports = {
    Movie: mongoose.model('Movie', movieSchema),
    Seats: mongoose.model('Seats', seatsSchema)
};