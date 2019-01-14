const express = require('express');
const error = require('./middleware/error');
const movies = require('./routes/movies');
const seats = require('./routes/seats');

let app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept",
    );
    res.header("Access-Control-Expose-Headers", "xAuthToken")
    next();
});

app.get("/", function (req, res, next) {
});

app.post("/", function (req, res, next) {
});

app.use(express.static("src"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/movies", movies);
app.use("/seats", seats);
//app.use(error);

let port = process.env.PORT || 4500;
app.listen(port, () => {
    console.log("Listening on port " + port);
});