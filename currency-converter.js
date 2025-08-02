const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const exchangeRates = {
  USD: { EUR: 0.85, INR: 83.2, GBP: 0.74 },
  EUR: { USD: 1.17, INR: 97.9, GBP: 0.87 },
  INR: { USD: 0.012, EUR: 0.010, GBP: 0.0089 },
  GBP: { USD: 1.35, EUR: 1.15, INR: 112.0 }
};

app.get('/', (req, res) => {
  res.send('💱 Welcome to the Currency Converter API! Use /convert');
});

app.get('/convert', (req, res) => {
  const { from, to, amount } = req.query;

  if (!from || !to || !amount) {
    return res.status(400).json({ error: 'Please provide from, to, and amount parameters.' });
  }

  const fromCurrency = from.toUpperCase();
  const toCurrency = to.toUpperCase();
  const amt = parseFloat(amount);

  if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
    return res.status(400).json({ error: 'Invalid currency conversion.' });
  }

  const rate = exchangeRates[fromCurrency][toCurrency];
  const convertedAmount = (amt * rate).toFixed(2);

  res.json({
    from: fromCurrency,
    to: toCurrency,
    amount: amt,
    converted: Number(convertedAmount),
    rate
  });
});

app.listen(PORT, () => {
  console.log(`💱 Currency Converter API running at http://localhost:${PORT}`);
});
