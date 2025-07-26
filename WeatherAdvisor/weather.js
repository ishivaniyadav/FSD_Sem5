function getWeatherAdvice(temp, condition) {
  if (condition === 'sunny' && temp > 30) {
    return 'It’s hot and sunny. Stay hydrated!';
  } else if (condition === 'rainy') {
    return 'Carry an umbrella!';
  } else if (condition === 'cold' || temp < 10) {
    return 'Wear warm clothes!';
  } else {
    return 'Weather looks fine. Have a good day!';
  }
}

module.exports = getWeatherAdvice;
