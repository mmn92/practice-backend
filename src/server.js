import dotven from "dotenv";
import express from "express";
import db from "./config/database";
import Routes from "./Routes";

dotven.config();

const server = express();
const { PORT } = process.env;

server.use(Routes);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${PORT}`);
});
