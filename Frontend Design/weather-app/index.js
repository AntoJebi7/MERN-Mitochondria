
document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementsByClassName("city-input")[0];

    cityInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            getWeatherData();
            event.preventDefault(); 
        }
    });
});

async function getWeatherData() {
    const cityInput = document.getElementsByClassName("city-input")[0].value.trim();
    
    if (cityInput === "") {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = ""; 
    const apiUrl = `https://api.exampleapi.com/v1/current.json?key=${apiKey}&q=${cityInput}&aqi=no`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
            document.getElementById("place").innerText = "City not found!";
            document.getElementById("temperature").innerText = "--";
            document.getElementById("description").innerText = "--";
            document.getElementById("weatherIcon").src = "";
            document.getElementById("wind").innerText = "--";
            document.getElementById("humidity").innerText = "--";
            document.getElementById("realFeel").innerText = "--";
            document.getElementById("uvIndex").innerText = "--";
            document.getElementById("pressure").innerText = "--";
            document.getElementById("chanceOfRain").innerText = "--";
            document.getElementById("temperatureHistory").innerText = "--";
            document.getElementById("sun").innerText = "--";
            document.getElementById("moon").innerText = "--";
        } else {
            const { location, current } = data;

            document.getElementById("place").innerText = location.name;
            document.getElementById("temperature").innerText = ` ${current.temp_c}°C`;
            document.getElementById("description").innerText = ` ${current.condition.text}`;
            document.getElementById("weatherIcon").src = current.condition.icon;
            document.getElementById("wind").innerText = `${current.wind_kph} km/h`;
            document.getElementById("humidity").innerText = `${current.humidity}%`;
            document.getElementById("realFeel").innerText = `${current.feelslike_c}°C`;
            document.getElementById("uvIndex").innerText = `${current.uv}`;
            document.getElementById("pressure").innerText = `${current.pressure_mb} mb`;
            document.getElementById("chanceOfRain").innerText = current.precip_mm ? `${current.precip_mm} mm` : "0%";
            document.getElementById("temperatureHistory").innerText = `${current.temp_c}°C`;
            document.getElementById("sun").innerText = `Sunrise: ${location.localtime.split(" ")[1]}`;
            document.getElementById("moon").innerText = `Moonrise: --`;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please try again later.");
    }
}
