Backend of our application is working on port 4500. We defined a special database of movies and display-time of each one. Before making first request, make sure you connected database and server to the right ports.

GET /movies
returns a list of movies available in our app.
example of response:
{
    "movies": [
        {
            "_id": "5c3c5d6ddc1ddd0574c9dbec",
            "name": "Aquaman",
            "description": "funny movie",
            "minAge": 18,
            "poster": "http://www.interia.pl",
            "__v": 0
        }
    ]
}

GET /movies/:id
returns details of the movie
example of response:
{    
    "movie": {
        "_id": "5c3c5d6ddc1ddd0574c9dbec",
        "name": "Aquaman",
        "description": "funny movie",
        "minAge": 18,
        "poster": "http://www.interia.pl",
        "__v": 0
    }
}

GET /seats
returns session of the movie
example of response:
[
    {
        "_id": "5c3c905e399850247003b889",
        "name": "Aquaman",
        "date": "2019-01-20",
        "time": "15:00",
        "__v": 0
    },
    {
        "_id": "5c3c91065d12c01818cdaf98",
        "name": "Aquaman",
        "date": "2019-01-20",
        "time": "18:00",
        "__v": 0
    },
    {
        "_id": "5c3c9ddd2fec15075c7853cd",
        "name": "Bohemian Rapsody",
        "date": "2019-01-20",
        "time": "15:00",
        "__v": 0
    },
    {
        "_id": "5c3c9de62fec15075c785465",
        "name": "film",
        "date": "2019-01-20",
        "time": "15:00",
        "__v": 0
    },
    {
        "_id": "5c3cac2584785d17f076b6fb",
        "name": "film",
        "date": "2019-01-20",
        "time": "15:00",
        "__v": 0
    }
]

GET /seats/:id
returns session and a state of each seat
{
    "session": {
        "_id": "5c3cac2584785d17f076b6fb",
        "name": "film",
        "date": "2019-01-20",
        "time": "15:00",
        "seats": [
            {
                "_id": "5c3cac2584785d17f076b791",
                "seatNumber": "001",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b790",
                "seatNumber": "002",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b78f",
                "seatNumber": "003",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b78e",
                "seatNumber": "004",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b78d",
                "seatNumber": "005",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b78c",
                "seatNumber": "006",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b78b",
                "seatNumber": "007",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b78a",
                "seatNumber": "008",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b789",
                "seatNumber": "009",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b788",
                "seatNumber": "010",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b787",
                "seatNumber": "011",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b786",
                "seatNumber": "012",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b785",
                "seatNumber": "013",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b784",
                "seatNumber": "014",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b783",
                "seatNumber": "015",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b782",
                "seatNumber": "016",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b781",
                "seatNumber": "017",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b780",
                "seatNumber": "018",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b77f",
                "seatNumber": "019",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b77e",
                "seatNumber": "020",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b77d",
                "seatNumber": "021",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b77c",
                "seatNumber": "022",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b77b",
                "seatNumber": "023",
                "isOccupied": true
            },
            {
                "_id": "5c3cac2584785d17f076b77a",
                "seatNumber": "024",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b779",
                "seatNumber": "025",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b778",
                "seatNumber": "026",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b777",
                "seatNumber": "027",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b776",
                "seatNumber": "028",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b775",
                "seatNumber": "029",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b774",
                "seatNumber": "030",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b773",
                "seatNumber": "031",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b772",
                "seatNumber": "032",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b771",
                "seatNumber": "033",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b770",
                "seatNumber": "034",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b76f",
                "seatNumber": "035",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b76e",
                "seatNumber": "036",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b76d",
                "seatNumber": "037",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b76c",
                "seatNumber": "038",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b76b",
                "seatNumber": "039",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b76a",
                "seatNumber": "040",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b769",
                "seatNumber": "041",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b768",
                "seatNumber": "042",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b767",
                "seatNumber": "043",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b766",
                "seatNumber": "044",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b765",
                "seatNumber": "045",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b764",
                "seatNumber": "046",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b763",
                "seatNumber": "047",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b762",
                "seatNumber": "048",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b761",
                "seatNumber": "049",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b760",
                "seatNumber": "050",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b75f",
                "seatNumber": "051",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b75e",
                "seatNumber": "052",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b75d",
                "seatNumber": "053",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b75c",
                "seatNumber": "054",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b75b",
                "seatNumber": "055",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b75a",
                "seatNumber": "056",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b759",
                "seatNumber": "057",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b758",
                "seatNumber": "058",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b757",
                "seatNumber": "059",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b756",
                "seatNumber": "060",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b755",
                "seatNumber": "061",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b754",
                "seatNumber": "062",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b753",
                "seatNumber": "063",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b752",
                "seatNumber": "064",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b751",
                "seatNumber": "065",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b750",
                "seatNumber": "066",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b74f",
                "seatNumber": "067",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b74e",
                "seatNumber": "068",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b74d",
                "seatNumber": "069",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b74c",
                "seatNumber": "070",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b74b",
                "seatNumber": "071",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b74a",
                "seatNumber": "072",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b749",
                "seatNumber": "073",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b748",
                "seatNumber": "074",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b747",
                "seatNumber": "075",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b746",
                "seatNumber": "076",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b745",
                "seatNumber": "077",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b744",
                "seatNumber": "078",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b743",
                "seatNumber": "079",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b742",
                "seatNumber": "080",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b741",
                "seatNumber": "081",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b740",
                "seatNumber": "082",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b73f",
                "seatNumber": "083",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b73e",
                "seatNumber": "084",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b73d",
                "seatNumber": "085",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b73c",
                "seatNumber": "086",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b73b",
                "seatNumber": "087",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b73a",
                "seatNumber": "088",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b739",
                "seatNumber": "089",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b738",
                "seatNumber": "090",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b737",
                "seatNumber": "091",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b736",
                "seatNumber": "092",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b735",
                "seatNumber": "093",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b734",
                "seatNumber": "094",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b733",
                "seatNumber": "095",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b732",
                "seatNumber": "096",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b731",
                "seatNumber": "097",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b730",
                "seatNumber": "098",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b72f",
                "seatNumber": "099",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b72e",
                "seatNumber": "100",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b72d",
                "seatNumber": "101",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b72c",
                "seatNumber": "102",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b72b",
                "seatNumber": "103",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b72a",
                "seatNumber": "104",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b729",
                "seatNumber": "105",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b728",
                "seatNumber": "106",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b727",
                "seatNumber": "107",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b726",
                "seatNumber": "108",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b725",
                "seatNumber": "109",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b724",
                "seatNumber": "110",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b723",
                "seatNumber": "111",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b722",
                "seatNumber": "112",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b721",
                "seatNumber": "113",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b720",
                "seatNumber": "114",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b71f",
                "seatNumber": "115",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b71e",
                "seatNumber": "116",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b71d",
                "seatNumber": "117",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b71c",
                "seatNumber": "118",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b71b",
                "seatNumber": "119",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b71a",
                "seatNumber": "120",
                "isOccupied": true
            },
            {
                "_id": "5c3cac2584785d17f076b719",
                "seatNumber": "121",
                "isOccupied": true
            },
            {
                "_id": "5c3cac2584785d17f076b718",
                "seatNumber": "122",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b717",
                "seatNumber": "123",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b716",
                "seatNumber": "124",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b715",
                "seatNumber": "125",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b714",
                "seatNumber": "126",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b713",
                "seatNumber": "127",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b712",
                "seatNumber": "128",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b711",
                "seatNumber": "129",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b710",
                "seatNumber": "130",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b70f",
                "seatNumber": "131",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b70e",
                "seatNumber": "132",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b70d",
                "seatNumber": "133",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b70c",
                "seatNumber": "134",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b70b",
                "seatNumber": "135",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b70a",
                "seatNumber": "136",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b709",
                "seatNumber": "137",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b708",
                "seatNumber": "138",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b707",
                "seatNumber": "139",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b706",
                "seatNumber": "140",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b705",
                "seatNumber": "141",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b704",
                "seatNumber": "142",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b703",
                "seatNumber": "143",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b702",
                "seatNumber": "144",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b701",
                "seatNumber": "145",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b700",
                "seatNumber": "146",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b6ff",
                "seatNumber": "147",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b6fe",
                "seatNumber": "148",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b6fd",
                "seatNumber": "149",
                "isOccupied": false
            },
            {
                "_id": "5c3cac2584785d17f076b6fc",
                "seatNumber": "150",
                "isOccupied": false
            }
        ],
        "__v": 0
    }
}

PUT /seats/:id
{reservation: [000, 001, ......, 150]};
updates state of seats
example of response:
{
    "movie": {
        "_id": "5c3c5d6ddc1ddd0574c9dbec",
        "name": "Super nice movie",
        "description": "funny movie",
        "minAge": 18,
        "poster": "big image",
        "__v": 0
    },
    "session": [
        {
            "_id": "5c3c905e399850247003b889",
            "date": "2019-01-20",
            "time": "15:00",
            "__v": 0
        },
        {
            "_id": "5c3c91065d12c01818cdaf98",
            "date": "2019-01-20",
            "time": "18:00",
            "__v": 0
        },
        {
            "_id": "5c3c9ddd2fec15075c7853cd",
            "date": "2019-01-20",
            "time": "21:00",
            "__v": 0
        }
    ]
}

Updating a database:

POST /movies
{  
name: name of the movie
description: short description
minAge: age restrictions
poster: url of movie poster
}
add movie to the database

POST /seats
{
name: name of the movie
date: date of session
time: hour
}
add a session to the database
