import "./styles.css";

import sunImg from "./asset/resource/sun.png";
import moonImg from "./asset/resource/moon.png";
import cloudsImg from "./asset/resource/clouds.png";
import heavyRainImg from "./asset/resource/heavy-rain.png";
import lightningImg from "./asset/resource/lightning.png";
import sleetImg from "./asset/resource/sleet.png";
import thunderstormImg from "./asset/resource/thunderstorm.png";
import windImg from "./asset/resource/wind.png";
import cloudsDayImg from "./asset/resource/cloudsDay.png";
import cloudsNightImg from "./asset/resource/night.png";
import snowImg from "./asset/resource/snowy.png";


const city = document.getElementById("city");
const submitBtn = document.getElementById("submit-btn");
const temp = document.getElementById("temp");
const icon = document.getElementById("icon");
const humidity = document.getElementById("humidity");
const feelslike = document.getElementById("feelslike");
const description = document.getElementById("description");
const iconImg = document.getElementById("icon-img");
const convertBtn = document.getElementById("convert-btn");

//True is F and false is C
let degree = true;

async function getWeather(value){
    try{
        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+value+"/?key=B2TNXK8VZYBRPC8W7DCV9LYCA")
        const weatherData = await response.json();
        return weatherData;
    }
    catch (error){
        console.log("Invalid City")
        description.textContent = "Description:Error fetching details try again"
    }
};

convertBtn.addEventListener("click" ,() =>{
    if (degree == true){
        degree = false;
        
        temp.textContent = changeDegree(placeholderTemp)
        feelslike.textContent = "Feelslike: "+ changeDegree(placeholderFeelslike)
        
        
    }
    else{
        degree = true;
      
        temp.textContent = changeDegree(placeholderTemp)
        feelslike.textContent = "Feelslike: "+ changeDegree(placeholderFeelslike)
        
    }
});

//alternates between F and C
function changeDegree(temp){
    if (degree == false){
       
        return Math.round((temp - 32)/(9/5)) + "°C";
        
    }
    else{
        return temp + "°F";
    }
}

submitBtn.addEventListener("click",fillData);
//enables user to use enter to send
document.getElementById("city").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
       fillData();
    }
});
let placeholderTemp;
let placeholderFeelslike;
function fillData(){
    getWeather(city.value)
    .then(data =>{
        console.log(data);
        temp.textContent = changeDegree(data.currentConditions.temp);
        placeholderTemp = data.currentConditions.temp;
        icon.textContent = data.currentConditions.conditions;
        humidity.textContent ="Humidity: "+ data.currentConditions.humidity+" %";
        feelslike.textContent = "Feelslike: "+ changeDegree(data.currentConditions.feelslike);
        placeholderFeelslike = data.currentConditions.feelslike;
        description.textContent = "Description: "+ data.description;
        fillIcon(data.currentConditions.icon);
       
    })
    .catch(error =>{
        console.log("Invalid City: " +error);
    });
}
//sets scr of weather icon according to the data
function fillIcon(icon){
    console.log(icon);
    switch (icon) {
        case "clear-day":
            console.log("inserting clear-day")
            iconImg.src = sunImg;
            break;
        case "clear-night":
            console.log("inserting clear-night")
            iconImg.src = moonImg;
            break;            
        case "cloudy":
            console.log("inserting cloudy")
            iconImg.src = cloudsImg;
            break;
        case "fog":
            console.log("inserting fog")
            iconImg.src = cloudsImg;
            break;
        case "hail":
            console.log("inserting hail")
            iconImg.src = heavyRainImg;
            break;
        case "partly-cloudy-day":
            console.log("inserting partly-cloudy-day")
            iconImg.src = cloudsDayImg;
            break;
        case "partly-cloudy-night":
            console.log("inserting partly-cloudy-night")
            iconImg.src = cloudsNightImg;
            break;
        case "rain-snow-showers-day":
            console.log("rain-snow-showers-day")
            iconImg.src = sleetImg;
            break;            
        case "rain-snow-showers-night":
            console.log("rain-snow-showers-night")
            iconImg.src = sleetImg;
            break;
        case "rain-snow":
            console.log("inserting rain-snow")
            iconImg.src = sleetImg;
            break;
        case "rain":
            console.log("inserting rain")
            iconImg.src = heavyRainImg;
            break;
        case "showers-day":
            console.log("inserting showers-day")
            iconImg.src = heavyRainImg;
            break;
        case "showers-night":
            console.log("inserting showers-night")
            iconImg.src = heavyRainImg;
            break;
        case "sleet":
            console.log("inserting sleet")
            iconImg.src = sleetImg;
            break;            
        case "snow-showers-day":
            console.log("inserting snow-showers-day")
            iconImg.src = snowImg;
            break;
        case "clear-night":
            console.log("inserting snow-showers-night")
            iconImg.src = snowImg;
            break;
        case "snow":
            console.log("inserting snow")
            iconImg.src = snowImg;
            break;
        case "thunder-rain":
            console.log("inserting thunder-rain")
            iconImg.src = thunderstormImg;
            break;
        case "thunder-showers-day":
            console.log("inserting thunder-showers-day")
            iconImg.src = thunderstormImg;
            break;
        case "thunder-showers-night":
            console.log("inserting thunder-showers-night")
            iconImg.src = thunderstormImg;
            break;            
        case "thunder":
            console.log("inserting thunder")
            iconImg.src = lightningImg;
            break;
        case "wind":
            console.log("inserting wind")
            iconImg.src = windImg;
            break;                        
        default:
            break;
    }
};
city.value = "London";
fillData();