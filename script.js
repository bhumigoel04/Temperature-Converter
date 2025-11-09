const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {
  const currentValue = event.target.value;

 
  if (currentValue === "") {
    celsiusEl.value = "";
    fahrenheitEl.value = "";
    kelvinEl.value = "";
    return;
  }

  const value = parseFloat(currentValue);

  switch (event.target.name) {
    case "celsius":
      kelvinEl.value = (value + 273.32).toFixed(2);
      fahrenheitEl.value = (value * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsiusEl.value = ((value - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((value - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "kelvin":
      celsiusEl.value = (value - 273.32).toFixed(2);
      fahrenheitEl.value = ((value - 273.32) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}


window.onload = function () {
  celsiusEl.value = "";
  fahrenheitEl.value = "";
  kelvinEl.value = "";
};
