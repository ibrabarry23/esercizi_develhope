import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("Richiesta ricevuta");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end(
    `<html>
      <head></head>
      <body>
        <h1>Hello</h1>
      </body>
    </html>`
  );
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
