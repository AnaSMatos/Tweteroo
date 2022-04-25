import express from 'express';
import cors from 'cors';


const app = express();
const port = 5000;
app.use(cors())
app.use(express.json())

let user = [];
let tweets = [];
let currentAvatar;
let currentUser;

app.post("/sign-up", (req, res) => {
    user.push(req.body);
    currentAvatar = req.body.avatar;
    currentUser = req.body.username;
    res.status(201).send("OK")
})

app.post("/tweets", (req, res) => {
    tweets.push({...req.body, avatar: currentAvatar, username: currentUser});
    res.status(201).send("OK")
})

app.get("/tweets", (req, res) => {
    let lastTweets = tweets.slice(-10);
    res.send(lastTweets.reverse())
})

app.get("/tweets/:user", (req, res) => {
    user = req.params.user
    let userTweets = tweets.filter(tweet => {
        return tweet.username === user;
    })

    res.send(userTweets);
})

app.listen(port)