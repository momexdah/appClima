// Archivo app.js

// Clave de API de WeatherAPI
const API_KEY = "45110f6f7d224c86a5d180207221512";

// Obtener el formulario y el elemento div donde se mostrará la información del clima
const form = document.getElementById("form");
const weatherInfo = document.getElementById("weather-info");

// Función que se ejecuta cuando se envía el formulario
form.addEventListener("submit", async (event) => {
  // Prevenir el comportamiento por defecto del formulario (recargar la página)
  event.preventDefault();

  // Obtener el nombre de la ciudad ingresada por el usuario
  const city = document.getElementById("city").value;

  // Realizar la solicitud a la API de WeatherAPI
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
    const data = await response.json();
    const { temp_c: temperature, condition: { text: description, icon }, humidity , wind_kph} = data.current;
    weatherInfo.innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
        <img src="${icon}" alt="${description}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${city}</h5>
        <p>Temperatura: ${temperature}°C</p>
        <p>Descripción: ${description}</p>
        <p>Humedad: ${humidity}%</p>
        <p>Viento: ${wind_kph} km/h<p>
        </div>
    </div>
      `;
  } catch (error) {
    console.error(error);
  }
});
