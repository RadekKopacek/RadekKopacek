const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!!");
//     //res.send("HELLO, WE GOT YOUR REQUEST! THIS IS THE RESPONSE!!!!");
//     res.send('<h1>THIS IS MY WEBPAGE!!!</h1>');
// });

app.get('/', (req, res) => {
    res.send('<h1>THIS THE HOMEPAGE!!!</h1>');
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID:<i>${postId}</i> on the <b>${subreddit}</b> subreddit</h1>`);
});

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!!');
});

app.get('/cats', (req, res) => {
    res.send('MEOW!!!!');
});

app.get('/dogs', (req, res) => {
    res.send('<b>WOOOF!!!</b>');
});
// default response must be at the end!!!!
app.get('*', (req, res) => {
    res.send(`I don't know that path:-(`);
});

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!");
});