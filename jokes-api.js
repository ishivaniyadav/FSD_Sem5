const express = require('express');
const app = express();
const PORT = 3000;
const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Why did the computer show up at work late? It had a hard drive.",
  "What do you call fake spaghetti? An impasta!",
  "How do you organize a space party? You planet.",
  "I told my computer I needed a break, and it said 'No problem — I’ll go to sleep.'"
];

app.get('/', (req, res) => {
  res.send('Welcome to the Joke API. Use /joke to get a random joke.');
});

app.get('/joke', (req, res) => {
  const index = Math.floor(Math.random() * jokes.length);
  res.json({ joke: jokes[index] });
});

app.listen(PORT, () => {
  console.log(`Joke API running at http://localhost:${PORT}`);
});
