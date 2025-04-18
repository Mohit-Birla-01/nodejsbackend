const express = require('express');
const app = express();
const PORT = 4000;

// Custom Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); // Move to the next middleware/route handler
});

// Define the /products route
app.get('/products', (req, res) => {
  res.send('Here is the list of all products.');
});

app.post('/products', (req, res) => {
  res.send('A new product has been added.');
});

// Define the /categories route
app.get('/categories', (req, res) => {
  res.send('Here is the list of all categories.');
});

app.post('/categories', (req, res) => {
  res.send('A new category has been created.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
