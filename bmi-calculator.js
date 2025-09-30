const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to the BMI Calculator API. Use POST /bmi with weight and height.');
});

app.post('/bmi', (req, res) => {
  const { weight, height } = req.body;

  if (!weight || !height || weight <= 0 || height <= 0) {
    return res.status(400).json({ error: 'Provide valid weight (kg) and height (cm).' });
  }
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  let status = '';

  if (bmi < 18.5) status = 'Underweight';
  else if (bmi < 24.9) status = 'Normal weight';
  else if (bmi < 29.9) status = 'Overweight';
  else status = 'Obesity';

  res.json({
    BMI: bmi.toFixed(2),
    Status: status
  });
});

app.listen(PORT, () => {
  console.log(`BMI Calculator API running at http://localhost:${PORT}`);
});
