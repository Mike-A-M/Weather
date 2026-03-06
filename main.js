
// Get random cat images 
// https://api.thecatapi.com/v1/images/search
// api key = live_8kNZp5dDR4NQRQOEq4UgoF5EejH2W6xfmwSXHVf90Qe9obVlSc8SQk0n5NSWtVZY
//change the limit to however many images to use

async function getRandomCatImage() {
  try {
    // API KEY
    const url = `https://api.thecatapi.com/v1/images/search?limit=20`;
    const api_key = "live_8kNZp5dDR4NQRQOEq4UgoF5EejH2W6xfmwSXHVf90Qe9obVlSc8SQk0n5NSWtVZY"

    // A public endpoint URL to get a random cat image
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json(); // API returns an array of image objects
    

    if (data && data.length > 0) {

      // Select 1 array image, index 0
      const imageUrl = data[0].url;
      
      // insert image into HTML
      let container = document.getElementById("cat_image")
      const newImage = document.createElement('img');
      newImage.src = imageUrl; 
      container.replaceWith(newImage);


      // format image
      newImage.width = 300;
      newImage.height = 300;
      newImage.style.borderRadius = '20px';
      newImage.style.opacity = "0.6";
    }

  } catch (error) {
    console.error("Error fetching cat image:", error);
  }
}


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

    pullForcast (latititude, longtitude)

}


// Look Up City in Weather API - 
// api is 85977e055851755123d0bcc6806eabf4
// https://openweathermap.org/current?collection=current_forecast
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

async function pullForcast (lat, lon) {
    try {
    // API KEY
    const api_key = "live_8kNZp5dDR4NQRQOEq4UgoF5EejH2W6xfmwSXHVf90Qe9obVlSc8SQk0n5NSWtVZY"
    // URL
    const url = "https://api.openweathermap.org/data/2.5/weather?lat="+ lat + "lon="+ lon + "&appid=" + api_key 
    

    // get the current conditons
    const response = await fetch(url)
    const data = await response.json(); // returns the conditons
    alert ("Forecast Ready")
    }
    catch (error) {alert("Error Getting", error);}


}




// Fetch random kitty Image
 getRandomCatImage()