const express = require('express');
const app = express();
const PORT = 3000;

// ✅ Custom Middleware that adds req.user
function addUser(req, res, next) {
  req.user = 'Guest';
  next(); // Move to the next middleware or route handler
}

// ✅ Route with middleware applied
app.get('/welcome', addUser, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}! Ready to handle requests.`);
});
