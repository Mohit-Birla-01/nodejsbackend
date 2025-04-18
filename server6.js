// server.js
const express = require('express');
const app = express();
const PORT = 4000;

// Middleware to parse JSON body
app.use(express.json());

// Import the books router
const booksRouter = require('./routes/books');

// Use the books router for the /books endpoint
app.use('/books', booksRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




// routes/books.js
const express = require('express');
const router = express.Router();

// GET /books route
router.get('/', (req, res) => {
  res.send('Here is the list of books!');
});

// POST /books route
router.post('/', (req, res) => {
  const book = req.body;  // Assuming JSON body
  console.log('Book received:', book);
  res.send('Book has been added!');
});

module.exports = router;
