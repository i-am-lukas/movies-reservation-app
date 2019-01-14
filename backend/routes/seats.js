const express = require('express');
const Schemas = require("../models/schemas");
const asyncMiddleware = require('../middleware/asyncMiddleware');
const router = express.Router();

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/cinemaapp", { useNewUrlParser: true })
  .then(() => console.log("Connected to the MongoDB"))
  .catch(err => console.log("Could not connect to the database", err));

router.post("/", asyncMiddleware(async (req, res) => {
    const seat = new Schemas.Seats({
    name: req.body.name,
    date: req.body.date,
    isOccupied: req.body.isOccupied
    });
    await seat.save();
    res.send(seat);
}));

    router.get("/:id", asyncMiddleware(async (req, res) => {
    const seats = await Schemas.Seats.findById(req.params._id);
    if (!seats) return res.status(404).send("Wrong id. You cannot reserve a seat.");
    res.send(todos);
}));

router.put("/:id", asyncMiddleware(async (req, res) => {
    const seats = await Schemas.Seats.findById(req.params._id);
    if (!seats) return res.status(404).send("Wrong id. You cannot reserve a seat.");
    await Schemas.Seats.updateOne({
        _id: req.params.id
    }, {
            $set: {
                isOccupied: req.body.isOccupied
            }
        });
    res.send("Success!");
}));

module.exports = router;