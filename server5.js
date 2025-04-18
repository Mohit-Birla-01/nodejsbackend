// server.js
const express = require('express');
const app = express();
const PORT = 4000;

// Import the router from the routes/products.js file
const productsRouter = require('./routes/products');

// Use the productsRouter for any route that starts with /products
app.use('/products', productsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});







// routes/products.js
const express = require('express');
const router = express.Router();

// Define the GET /products route
router.get('/', (req, res) => {
  res.send('Here is the list of all products.');
});

// Define the POST /products route
router.post('/', (req, res) => {
  res.send('A new product has been added.');
});

// Export the router
module.exports = router;
