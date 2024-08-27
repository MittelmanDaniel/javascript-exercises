const convertToCelsius = function(temp) {
  c = (temp-32)/1.8
  return Math.round(10*c)/10
};

const convertToFahrenheit = function(temp) {
    f = 1.8 * temp + 32;
    return Math.round(10*f)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
