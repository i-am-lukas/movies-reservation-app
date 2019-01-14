Backend of our application is working on port 4500. We defined a special database of movies and display-time of each one. Before making first request, make sure you connected database and server to the right ports.

GET /movies
returns a list of movies available in our app.

GET /movies/:id
returns details of the movie

GET /seats
returns session of the movie

GET /seats/:id
returns session and a state of each seat

PUT /seats/:id
{reservation: [000, 001, ......, 150]};
updates state of seats

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
