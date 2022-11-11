import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const arrTweets = [];
const arrUser = [];

app.post("/sign-up", (req, res) => {
  const newUser = {
    username: req.body.username,
    avatar: req.body.avatar,
  };

  arrUser.push(newUser);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const img = arrUser.find((obj) => obj.username === req.body.username);

  const newTweet = {
    username: req.body.username,
    avatar: img.avatar,
    tweet: req.body.tweet,
  };

  arrTweets.unshift(newTweet);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  res.send(arrTweets.slice(0, 10));
});

app.listen(5000, () => console.log("App running in port: 5000"));
