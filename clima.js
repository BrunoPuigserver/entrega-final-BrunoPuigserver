async function obtenerClima(ciudad) {
    const apiKey = '7c594b581dc853d2bdf76ffb91bbcd2b'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        if (data.cod === 200) {
            mostrarClima(data);
        } else {
            alert(`Error en la API: ${data.message}`);
        }
    } catch (error) {
        console.error('Error al obtener el clima:', error);
    }
}

function mostrarClima(data) {
    const { main, name, weather } = data;
    const { temp, humidity } = main;
    const { description, icon } = weather[0];

    document.getElementById('ciudad').textContent = `Ciudad: ${name}`;
    document.getElementById('descripcion').textContent = `Descripción: ${description}`;
    document.getElementById('temperatura').textContent = `Temperatura: ${temp} °C`;
    document.getElementById('humedad').textContent = `Humedad: ${humidity}%`;
    document.getElementById('icono').src = `http://openweathermap.org/img/wn/${icon}.png`;
}


document.addEventListener('DOMContentLoaded', () => {
    const ciudad = 'Buenos Aires'; 
    obtenerClima(ciudad);
});
