function updateCity() {
	let currentCity = document.querySelector("h1");
	let inputCity = document.querySelector("#inputCity");
	inputCity = inputCity.value;
	let city = inputCity;
	let inputCityFirstLetter = inputCity.charAt(0).toUpperCase();
	inputCity = inputCity.slice(1).toLowerCase();
	currentCity.innerHTML = inputCityFirstLetter + inputCity;
	let apiKey = "f8f8b2941t5850dac0b4334a68o053a6";
	let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
	axios.get(url).then(showUser);
}

function showUser(response) {
	let temp = document.querySelector(".temp");
	let description = document.querySelector("#description");
	let windSpeed = document.querySelector("#wind-speed");
	description.innerHTML = response.data.condition.description;
	windSpeed.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
	let humidity = document.querySelector("#humidity");
	humidity.innerHTML = `Humidity: ${Math.round(response.data.temperature.humidity)}%`;
	temp.innerHTML = Math.round(response.data.temperature.current);
	document.querySelector("#icon").setAttribute("src", response.data.condition.icon_url);
}

let now = new Date();

let days = ["Sunday", "Monday", "tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

let currentTime = document.querySelector(".current-time");
currentTime.innerHTML = `${day} ${hours}:${minutes}`;
let button = document.querySelector("button");
button.addEventListener("click", updateCity);

let apiKey = "f8f8b2941t5850dac0b4334a68o053a6";
let url = `https://api.shecodes.io/weather/v1/current?query=oslo&key=${apiKey}`;
axios.get(url).then(showUser);
