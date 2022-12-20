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


function changeCity(event) {
  event.preventDefault();
  let input = document.getElementById("input_value");
  document.getElementById("city").innerHTML = input.value;
}
document.getElementById("form").addEventListener("submit", changeCity);

let apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
let url = `https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=${apiKey}&units=metric`;

axios.get(url).then(changeData);

function showLocation(location) {
  console.log(location);
  let lat = location.coords.latitude;
  let lon = location.coords.longitude;
  console.log(lat, lon);

  function showCurrent(loc) {
    document.getElementById("city").innerHTML = loc.data.name;
    document.querySelector("h1").innerHTML = Math.round(loc.data.main.temp);
    document.querySelector("#description").innerHTML = loc.data.weather[0].main;
    document.querySelector("#humidity").innerHTML =
      "Humidity: " + loc.data.main.humidity + "%";
    document.querySelector("#wind").innerHTML =
      "Wind speed: " + loc.data.wind.speed + " km/h";
    console.log(loc.data);
  }
  let urlSecond = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(urlSecond).then(showCurrent);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showLocation);
}

document
  .getElementById("current")
  .addEventListener("click", getCurrentPosition);
