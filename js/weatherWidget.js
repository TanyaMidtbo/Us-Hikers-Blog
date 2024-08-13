const baseUrl = "https://meteostat.p.rapidapi.com/point/hourly"; // Base URL for all endpoints
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3bc6906176msh84853ac5c51c6fap125507jsn0b698ccc63b7",
    "x-rapidapi-host": "meteostat.p.rapidapi.com",
  },
};

// Function to get today's date in ISO 8601 format (YYYY-MM-DD)
function getTodayDate() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}
// Function to get the current hour
function getCurrentHour() {
  const today = new Date();
  return today.getHours();
}
const currentHour = getCurrentHour();
console.log("Current hour:", currentHour);

async function fetchWeatherData() {
  const todayDate = getTodayDate();
  // Oslo coordinates
  const latitude = "59.911491";
  const longitude = "10.757933";
  const url = `${baseUrl}?lat=${latitude}&lon=${longitude}&start=${todayDate}&end=${todayDate}`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
  }
}

const renderingContainer = document.querySelector(".weather-widget-container");
const weatherInfoList = document.querySelector(".weather-info-list");

async function renderWeather() {
  const weather = await fetchWeatherData();
  try {
    const weatherCondition = weather[currentHour];

    // Create elements
    const weatherIcon = document.createElement("img");
    weatherIcon.className = "weather-icon";
    const weatherInformation = document.createElement("li");
    weatherInformation.className = "weather-info";

    // Append data to created elements
    renderingContainer.appendChild(weatherIcon);
    weatherInfoList.appendChild(weatherInformation);

    // Render elements with data fetched from the API
    weatherIcon.src = `../assets/${weatherCondition.coco}.png`;
    weatherInformation.innerHTML = `Temperature: ${weatherCondition.temp}, Wind Speed: ${weatherCondition.wspd}, Precipitation: ${weatherCondition.prcp}`;
  } catch (error) {
    console.error(error);
  }
}


export { getCurrentHour, renderWeather };
