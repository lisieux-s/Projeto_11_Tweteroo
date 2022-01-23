import express from "express";
const server = express();
server.use(express.json())

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
        latestTweets.push(tweets[i])
    }
    res.send(latestTweets);
})

server.listen(5000)
console.log('running on port 5000')