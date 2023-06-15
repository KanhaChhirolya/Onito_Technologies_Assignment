# Onito_Technologies_Assignment

1. Create an HTTP server with the following routes

a) GET /api/v1/longest-duration-movies
This route returns as JSON the top 10 movies with the longest runTime
The output should contain tconst, primaryTitle, runtimeMinutes & genres.
http://localhost:3000/movies/api/v1/longest-duration-movies

b) POST /api/v1/new-movie
This route takes JSON as input for new movie and saves it into the database
On successful save, it returns “success”.
http://localhost:3000/movies/api/v1/longest-duration-movies

c) GET /api/v1/top-rated-movies
This route returns as JSON the movies with an averageRating > 6.0, in sorted
order by averageRating.
http://localhost:3000/movies/api/v1/new-movie

d) GET /api/v1/genre-movies-with-subtotals
Show a list of all movies genre-wise with Subtotals of their numVotes.
The calculation of subtotals should be done in SQL query; not the API code
http://localhost:3000/movies/api/v1/genre-movies-with-subtotals

e) POST /api/v1/update-runtime-minutes
Increment runtimeMinutes of all Movies using only SQL query (not in API code).
Increment runtimeMinutes by :
15 if genre = Documentary
30 if genre = Animation
45 for the rest
http://localhost:3000/movies/api/v1/update-runtime-minutes