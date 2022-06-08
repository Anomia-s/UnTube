const express = require("express");
const ytdl = require("ytdl-core");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/unblock", (req, res) => {
  const { video } = req.query;
  if (!video) return res.status(400);
  try {
    ytdl(video).pipe(res);
  } catch (err) {
    res.status(400);
  }
});

app.listen(3000);
