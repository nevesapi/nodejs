import { createServer } from "node:http";
import fs from "node:fs/promises";

const server = createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-type": "text/html;charset=utf-8" });
      fs.readFile("pages/index.html").then((content) => res.end(content));
      break;

    case "/sobre":
      res.writeHead(200, { "Content-type": "text/html;charset=utf-8" });
      fs.readFile("pages/sobre.html").then((content) => res.end(content));
      break;

    default:
      res.writeHead(200, { "Content-type": "text/html;charset=utf-8" });
      fs.readFile("pages/404.html").then((content) => res.end(content));
      break;
  }
});

server.listen(8080, () => {
  console.log(`Listening on port 8080`);
});
