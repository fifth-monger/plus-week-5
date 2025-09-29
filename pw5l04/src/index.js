let city = "Sydney";
let apiKey = "23ab4btd750623bd6a0096bbc3of4f4f";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let cityResponse = response.data.city;
  console.log(temperature);

  let h1 = document.querySelector("h1");
  h1.innerHTML = `It is ${temperature}℃ in ${cityResponse}!`;
}

axios.get(apiUrl).then(displayTemperature);
