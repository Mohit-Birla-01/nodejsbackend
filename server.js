const http = require('http');

const server = http.createServer((req, res) => {
  let responseContent;

  // Set the Content-Type to 'text/html'
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Check the URL and determine the response
  switch (req.url) {
    case '/':
      responseContent = '<html><body><h1>Hello World</h1></body></html>';
      break;
    case '/pizza':
      responseContent = '<html><body><h1>This is your pizza</h1></body></html>';
      break;
    case '/home':
      responseContent = '<html><body><h1>Welcome home</h1></body></html>';
      break;
    case '/about':
      responseContent = '<html><body><h1>Welcome to About Us</h1></body></html>';
      break;
    case '/node':
      responseContent = '<html><body><h1>Welcome to my Node Js project</h1></body></html>';
      break;
    default:
      responseContent = '<html><body><h1>Page Not Found</h1></body></html>';
      break;
  }

  // Send the response back to the client
  res.end(responseContent);
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
