const Routes = server => {
  server.get("/", (req, res) => {
    res.send("Go!");
  });
};

export default Routes;
