const myButton = document.getElementById("zipcode");

// Add an event listener for the 'click' event
myButton.addEventListener('click', zipCodeToGlobal());




// Look Up City in Weather API - 
// api is 85977e055851755123d0bcc6806eabf4
// https://openweathermap.org/current?collection=current_forecast
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
async function pullForcast (zipcode){
  


}



// Global Coordinates from Zipcode
// http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}
// country code = 840 for US, use US
async function zipCodeToGlobal () {
    alert("Function Fired");
    const zip = document.getElementById("city-input");
    const apiKey = "85977e055851755123d0bcc6806eabf4"
    const apiURL = "http://api.openweathermap.org/geo/1.0/zip?zip=46231,US&appid=85977e055851755123d0bcc6806eabf4"
    const response = await fetch(apiURL)
    // broken here and down
    const longtitude = response.lon;
    const latititude = response.lat;
    alert(latititude)

}
