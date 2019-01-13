Backend of our application is working on port 4500. We defined a special database of movies and display-time of each one. Before making first request, make sure you connected database and server to the right ports.

GET /movies
returns a list of movies available in our app.

GET /movies/:id
returns a list of displays single movie

GET /seats/:id
returns state of each seat

PUT /seats/:id
{isOccupied: [false, false, false, ............, true, false]};
updates state of seats