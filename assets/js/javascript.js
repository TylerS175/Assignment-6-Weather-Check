// Creating Variable for Weather Dashboard 
var weatherOneCallQueryBaseUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
var geocoder = new google.maps.geocoder;
var place = "";
var cityNameDisplay = "";
var currentCityData = [];
var currentCityGeo = [];
var searchCities = [];
