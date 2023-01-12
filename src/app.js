function updateCity() {
  let currentCity = document.querySelector("h1");
  let inputCity = document.querySelector("#inputCity");
  inputCity = inputCity.value;
  let city = inputCity;
  let inputCityFirstLetter = inputCity.charAt(0).toUpperCase();
  inputCity = inputCity.slice(1).toLowerCase();
  currentCity.innerHTML = inputCityFirstLetter + inputCity;
  let apiKey = "5354b60afda2b7800186c06153932396";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&limit=5&units=metric&appid=${apiKey}`;
  axios.get(url).then(showUser);
  console.log(url);
}

function showUser(response) {
  let tempMax = document.querySelector(".temp_max");
  let tempMin = document.querySelector(".temp_min");
  let emoji = document.querySelector(".emoji");
  let city = document.querySelector("h1");
  tempMax.innerHTML = Math.round(response.data.list[0].main.temp_max);
  tempMin.innerHTML = Math.round(response.data.list[0].main.temp_min);
  city = city.innerHTML;
  if (tempMax.innerHTML < -10) {
    console.log("Its cold...");
    emoji.innerHTML = "🥶";
  } else if (tempMax.innerHTML < 0) {
    console.log("Its cold");
    emoji.innerHTML = "☃️";
  } else if (tempMax.innerHTML < 10) {
    emoji.innerHTML = "😸";
  } else {
    emoji.innerHTML = "☀️";
  }
}

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

let currentTime = document.querySelector(".current-time");
currentTime.innerHTML = `${day} ${hours}:${minutes}`;
let button = document.querySelector("button");
button.addEventListener("click", updateCity);

let apiKey = "5354b60afda2b7800186c06153932396";
let url = `https://api.openweathermap.org/data/2.5/forecast?q=oslo&limit=5&units=metric&appid=${apiKey}`;
axios.get(url).then(showUser);
