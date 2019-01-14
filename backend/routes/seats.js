const express = require("express");
const Schemas = require("../models/schemas");
const asyncMiddleware = require("../middleware/asyncMiddleware");
const router = express.Router();

const mongoose = require("mongoose");
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
    const seats = [];
    for (let i = 1; i <= 150; i++) {
      if (i < 10) {
        seats.push({ seatNumber: "00" + i, isOccupied: false });
      } else if (i < 100) {
        seats.push({ seatNumber: "0" + i, isOccupied: false });
      } else {
        seats.push({ seatNumber: i, isOccupied: false });
      }
    }
    const seat = new Schemas.Session({
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      seats: seats
    });
    await seat.save();
    res.json({ seat: seat });
  })
);

router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    const sessions = await Schemas.Session.find().select("-seats");
    res.json(sessions);
  })
);

router.get(
  "/:id",
  asyncMiddleware(async (req, res) => {
    const session = await Schemas.Session.findById(req.params.id);
    if (!session)
      return res.status(404).send("Wrong id. You cannot reserve a seat.");
    res.json({ session: session });
  })
);

router.put(
  "/:id",
  asyncMiddleware(async (req, res) => {
    const session = await Schemas.Session.findByIdAndUpdate(req.params.id);
    if (!session) {
      return res.status(404).send("Wrong id. You cannot reserve a seat.");
    }
    session.seats.map(seat => {
      if (req.body.reservation.includes(seat.seatNumber)) {
        seat.isOccupied = true;
      }
    });
    await session.save();
    res.send("Success!");
  })
);

module.exports = router;
