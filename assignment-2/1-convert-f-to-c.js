function convertFahrenheitToCelsius(fahrenheit) {
  let result = (((fahrenheit - 32) * 5) / 9).toFixed(2);

  return result;
}

export default convertFahrenheitToCelsius