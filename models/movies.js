const connection = require("../configs/database")

const Movie = {};

Movie.create = (movieData, ratingData, callback) => {
  const { tconst, titleType, primaryTitle, runtimeMinutes, genres } = movieData;
  const { averageRating, numVotes } = ratingData;

  // Insert movie into the 'movies' table
  connection.query(
    'INSERT INTO movies (tconst, titleType, primaryTitle, runtimeMinutes, genres) VALUES (?, ?, ?, ?, ?)',
    [tconst, titleType, primaryTitle, runtimeMinutes, genres],
    (err, result) => {
      if (err) {
        callback(err);
        return;
      }

      const movieId = result.insertId;
      Movie.createRating(movieId, averageRating, numVotes, (err) => {
        if (err) {
          callback(err);
          return;
        }

        callback(null);
      });
    }
  );
};

Movie.createRating = (movieId, averageRating, numVotes, callback) => {
  // Insert rating into the 'ratings' table
  connection.query(
    'INSERT INTO ratings (movie_id, averageRating, numVotes) VALUES (?, ?, ?)',
    [movieId, averageRating, numVotes],
    (err) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    }
  );
};

module.exports = Movie;
