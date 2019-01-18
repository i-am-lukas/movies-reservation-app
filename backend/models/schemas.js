var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    name: String,
    description: String,
    minAge: Number,
    poster: String
  },
  {
    collection: "movies"
  }
);

const seatSchema = new Schema({
  seatNumber: String,
  isOccupied: Boolean
});

const sessionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50
    },
    date: {
      type: String,
      required: true
    },
    time: { type: String, required: true },
    seats: [seatSchema]
  },
  {
    collection: "session"
  }
);

module.exports = {
  Movie: mongoose.model("Movie", movieSchema),
  Session: mongoose.model("Session", sessionSchema),
  Seat: mongoose.model("Seat", seatSchema)
};
