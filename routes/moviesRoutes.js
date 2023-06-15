const express = require('express');
const app = express();
const MovieRouter = express.Router();

// Route: GET /api/v1/longest-duration-movies
MovieRouter.get('/api/v1/longest-duration-movies', (req, res) => {
    const query = 'SELECT tconst, primaryTitle, runtimeMinutes, genres FROM movies ORDER BY runtimeMinutes DESC LIMIT 10';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });
  
  // Route: POST /api/v1/new-movie
  MovieRouter.post('/api/v1/new-movie', (req, res) => {
    const { tconst, titleType, primaryTitle, runtimeMinutes, genres } = req.body;
    const query = 'INSERT INTO movies (tconst, titleType, primaryTitle, runtimeMinutes, genres) VALUES (?, ?, ?, ?, ?)';
    const values = [tconst, titleType, primaryTitle, runtimeMinutes, genres];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json({ message: 'Success' });
      }
    });
  });
  
  // Route: GET /api/v1/top-rated-movies
  MovieRouter.get('/api/v1/top-rated-movies', (req, res) => {
    const query = 'SELECT tconst, primaryTitle, genres, averageRating FROM movies INNER JOIN ratings ON movies.tconst = ratings.tconst WHERE averageRating > 6.0 ORDER BY averageRating DESC';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });
  
  // Route: GET /api/v1/genre-movies-with-subtotals
  MovieRouter.get('/api/v1/genre-movies-with-subtotals', (req, res) => {
    const query = 'SELECT genres, primaryTitle, SUM(numVotes) AS numVotes FROM movies GROUP BY genres, primaryTitle WITH ROLLUP';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });
  
  // Route: POST /api/v1/update-runtime-minutes
  MovieRouter.post('/api/v1/update-runtime-minutes', (req, res) => {
    const query = 'UPDATE movies SET runtimeMinutes = runtimeMinutes + CASE WHEN genres = "Documentary" THEN 15 WHEN genres = "Animation" THEN 30 ELSE 45 END';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json({ message: 'Success' });
      }
    });
  });
  
  module.exports = MovieRouter;