const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const connection = mysql.createConnection({
  host: 'localhost',
  user:process.env.mysqluserName,
  password:process.env.mysqlPassword,
  database: 'OnitoMovies', 
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySql database');

  // Create the movies and ratings tables
  const createMoviesTable = `CREATE TABLE IF NOT EXISTS movies (
    tconst VARCHAR(9) PRIMARY KEY,
    titleType VARCHAR(255),
    primaryTitle VARCHAR(255),
    runtimeMinutes INT,
    genres VARCHAR(255)
  )`;

  const createRatingsTable = `CREATE TABLE IF NOT EXISTS ratings (
    tconst VARCHAR(9) PRIMARY KEY,
    averageRating DECIMAL(3,1),
    numVotes INT
  )`;

  connection.query(createMoviesTable, (err) => {
    if (err) {
      console.error('Error creating employees table:', err);
    }
  });

  connection.query(createRatingsTable, (err) => {
    if (err) {
      console.error('Error creating contacts table:', err);
    }
  });
});

module.exports = connection;