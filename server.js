var express = require("express"),
  app = express(),
  port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Ongrid task");
});

app.listen(port, () => {
  console.log("Server started on port: " + port);
});
