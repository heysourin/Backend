const express = require("express");
const app = express();

// Respond with "hello world" when a gets request is made to the homepage
app.get("/", (req, res) => {
  res.sendFile("D:/Codes/Backend/views/index.html");
});
//Going to another page
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});
//You can sendFile in two ways, see both the cases above.


app.listen(3000);

// Redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page
app.use((req, res) => {
  //TODO: have to set status code manually in this case, have to write 404 at the End.(Synchronous behaviour)
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
