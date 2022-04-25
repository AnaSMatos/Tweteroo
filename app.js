import express from 'express';
import cors from 'cors';


const app = express();
const port = 5000;
app.use(cors())
app.use(express.json())

let user = [];
let tweets = [];
let currentAvatar;

app.post("/sign-up", (req, res) => {
    user.push(req.body);
    currentAvatar = req.body.avatar;
    res.status(201).send("OK")
})

app.post("/tweets", (req, res) => {
    tweets.push({...req.body, avatar: currentAvatar});
    res.status(201).send("OK")
})

app.get("/tweets", (req, res) => {
    let lastTweets = tweets.slice(-10);
    res.send(lastTweets.reverse())
})

app.listen(port)