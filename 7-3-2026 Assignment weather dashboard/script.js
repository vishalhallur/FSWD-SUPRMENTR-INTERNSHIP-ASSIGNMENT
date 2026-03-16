async function getWeather(){

let city = document.getElementById("city").value;
let status = document.getElementById("status");
let result = document.getElementById("weatherResult");

status.innerText = "Loading weather data...";
result.innerHTML = "";

try{

let response = await fetch(
"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=YOUR_API_KEY"
);

if(!response.ok){
throw new Error("City not found");
}

let data = await response.json();

status.innerText = "Weather Found";

result.innerHTML = `
<p><strong>City:</strong> ${data.name}</p>
<p><strong>Temperature:</strong> ${data.main.temp} °C</p>
<p><strong>Weather:</strong> ${data.weather[0].description}</p>
`;

}
catch(error){

status.innerText = "Error: Could not fetch weather data";

}

}