
// Get random cat images 
// https://api.thecatapi.com/v1/images/search
// use above for one imgage
// api key = live_8kNZp5dDR4NQRQOEq4UgoF5EejH2W6xfmwSXHVf90Qe9obVlSc8SQk0n5NSWtVZY

window.onload = function () {
    getCat();
}

async function getCat () {

const url = `https://api.thecatapi.com/v1/images/search?`;
const api_key = "live_8kNZp5dDR4NQRQOEq4UgoF5EejH2W6xfmwSXHVf90Qe9obVlSc8SQk0n5NSWtVZY"

}






// Add an event listener for the 'click' event
myButton.addEventListener('click', zipCodeToGlobal());


// Global Coordinates from Zipcode
// http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}
// country code = 840 for US, use US
async function zipCodeToGlobal () {
    // Retrieve zip code from form
    const zipcode = document.getElementById("zipcode")
    const myZipcode = zipcode.value;

    // Fetch coordinates
    const apiKey = "85977e055851755123d0bcc6806eabf4"
    const apiURL = "http://api.openweathermap.org/geo/1.0/zip?zip="+  myZipcode + ",US&appid=85977e055851755123d0bcc6806eabf4"
    const response = await fetch(apiURL)
    const geo = await response.json();

    // Render on page
   
    const longtitude = geo.lon;
    document.getElementById("longitude").textContent = `${longtitude} Degrees`
    const latititude = geo.lat;
    document.getElementById("latitude").textContent = `${latititude} Degrees`

}


const myButton = document.getElementById("zipcode");






// Look Up City in Weather API - 
// api is 85977e055851755123d0bcc6806eabf4
// https://openweathermap.org/current?collection=current_forecast
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
async function pullForcast (zipcode){
  
}



