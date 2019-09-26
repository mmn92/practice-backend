const routes = server => {
  server.get("/", (req, res) => {
    res.send("Go!");
  });
};

module.exports = routes;
