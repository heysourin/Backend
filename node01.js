//server creation
// Step 1. http module

const http = require("http");
const fs = require("fs");
const _ = require("lodash");


//? createServer() works only when client calls server
const server = http.createServer((req, res) => {
  console.log(`Request has been made from browser to server`);
  // console.log(req.method)
  // console.log(req.url)

  //?have to specify browser what type of file we are looking for

  // res.setHeader('Content-typpe', 'text/plain');
  // res.write('Hello');
  // res.end();

  //! calling html file
  let path = "./views";
  switch (req.url) {
    case "/":
      path += "/index.html";
      break;
    case "/about":
      path += "/about.html";
      break;
    case "/about-us":
      res.statusCode=301;
      res.setHeader('Location','about')
      res.end();
      break;
    default:
      path += "/404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, filedata) => {
    if (err) {
      console.log(err);
    } else {
      res.write(filedata);
      res.end();
    }
  });
});

// server.listen(port number, host, callBack());
server.listen(3000, "localhost", () => {
  console.log(`Server is listening`);
});
