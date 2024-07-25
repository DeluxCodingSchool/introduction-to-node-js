const http = require("http");
const fs = require("fs");
const url = require("url");

const homeTemp = fs.readFileSync("./templates/home.html", "utf8");
const aboutTemp = fs.readFileSync("./templates/about.html", "utf8");
const productTemp = fs.readFileSync("./templates/product.html", "utf8");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  console.log(pathname);
  if (pathname === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(homeTemp);
  } else if (pathname === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(aboutTemp);
  } else if (pathname === "/product") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(productTemp);
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("ERROR: Page not found");
  }
});

server.listen(3005, () => {
  console.log("Server is running at http://localhost:3005/");
});
