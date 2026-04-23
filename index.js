const express = require("express");
const app = express();

app.use(express.json());

app.post("/notify", (req, res) => {
  console.log("Notification sent");
  res.json({ status: "notified" });
});

app.post("/cancel", (req, res) => {
  console.log("Notification cancelled");
  res.json({ status: "cancelled" });
});

app.listen(5000, () => console.log("Notification service running"));
