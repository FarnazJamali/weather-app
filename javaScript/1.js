let city = document.getElementById("city").innerHTML;
function changeData(res) {
  console.log(res.data.weather[0].main);
  document.querySelector("h1").innerHTML = Math.round(res.data.main.temp);
  document.querySelector("#description").innerHTML = res.data.weather[0].main;
  document.querySelector("#humidity").innerHTML =
    "Humidity: " + res.data.main.humidity + "%";
  document.querySelector("#wind").innerHTML =
    "Wind speed: " + res.data.wind.speed + " km/h";
  console.log(res.data);
}

console.log(city);
let apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
let url = `https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=${apiKey}&units=metric`;

axios.get(url).then(changeData);

function changeCity(event) {
  event.preventDefault();
  let input = document.getElementById("input_value");
  document.getElementById("city").innerHTML = input.value;
}
let form = document.getElementById("form");
form.addEventListener("submit", changeCity);
