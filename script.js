const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "055e4eb8a6msh2dfc85c46e49c77p1f770cjsn51d8111b7c53",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
function getWeather(city) {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      temp.innerHTML = response.temp;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      humidity.innerHTML = response.humidity;
      feels_like.innerHTML = response.feels_like;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      cloud_pct.innerHTML = response.cloud_pct;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
}
getWeather("Bangalore"); // default value for weather

submitbutton.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(inputcityName.value);
});


inputcityName.addEventListener("keypress",(e)=>{
  if(e.key=="Enter"){
    // document.getElementById("submitbutton").click()
    // both are same
   submitbutton.click()
  }
})
