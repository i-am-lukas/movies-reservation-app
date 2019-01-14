const asyncMiddleware = require("../middleware/asyncMiddleware");
const Schemas = require("../models/schemas");
const _ = require("lodash");
const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

mongoose
  .connect(
    "mongodb://localhost/cinemaapp",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to the MongoDB"))
  .catch(err => console.log("Could not connect to the database", err));

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const movie = new Schemas.Movie({
      name: req.body.name,
      description: req.body.description,
      minAge: req.body.minAge,
      poster: req.body.poster
    });
    await movie.save();
    res.json({ movie: movie });
  })
);

router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    const movies = await Schemas.Movie.find();
    res.json({ movies: movies });
  })
);

router.get(
  "/:id",
  asyncMiddleware(async (req, res) => {
    const movie = await Schemas.Movie.findById(req.params.id);
    if (!movie) return res.status(400).send("Movie is not available now.");
    res.json({ movie: movie });
  })
);

module.exports = router;
