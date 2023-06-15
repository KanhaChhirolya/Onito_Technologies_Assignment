const express = require('express');
const bodyParser = require('body-parser');
 const MovieRouter = require('./routes/moviesRoutes');

const app = express();

// Parse request bodies as JSON
app.use(bodyParser.json());

// Set up employee routes
app.use('/movies', MovieRouter);

// connect the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
