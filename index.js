import express from "express";
import cors from 'cors';
const server = express();
server.use(express.json())
server.use(cors())

const users = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    let user = req.body;
    users.push(user);
    res.send('OK');
}) 

server.post('/tweets', (req, res) => {
    let tweet = req.body;
    tweets.push(tweet);
    res.send('OK');
})

server.get('/tweets', (req, res) => {
    let latestTweets = [];
    
    for(let i = tweets.length-1; i > tweets.length - 10; i--) {
        let tweetUsername = tweets[i].username;
        let tweetTweet = tweets[i].tweet;
        let tweetAvatar = (users.find(user => user.username === tweetUsername)).avatar
        console.log(tweetAvatar)
        let tweet = {
            username: tweetUsername,
            avatar: tweetAvatar,
            tweet: tweetTweet
        }
        latestTweets.push(tweet)
    }
    res.send(latestTweets);
})

server.listen(5000)
console.log('Running on port 5000')