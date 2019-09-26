require("dotenv").config();
const express = require("express");

const server = express();
const { PORT } = process.env;

require("./routes.js")(server);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${PORT}`);
});
