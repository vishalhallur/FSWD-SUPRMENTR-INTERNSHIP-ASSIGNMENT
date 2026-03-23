const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.end("Welcome to Home Page");
  } 
  else if (req.url === "/about") {
    res.end("This is About Page");
  } 
  else if (req.url === "/contact") {
    res.end("Contact us at example@gmail.com");
  } 
  else {
    res.end("404 Page Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});