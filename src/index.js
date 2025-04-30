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

async function getWeather(value){
    try{
        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+value+"/?key=B2TNXK8VZYBRPC8W7DCV9LYCA")
        const weatherData = await response.json();
        return weatherData;
    }
    catch (error){
        console.log("Invalid City")
    }
};

// getWeather("india")
// .then(temp =>{
//     console.log(temp.currentConditions);
// })
// .catch(error =>{
//     console.log(error);
// });


submitBtn.addEventListener("click",() =>{
    getWeather(city.value)
    .then(data =>{
        console.log(data);
        temp.textContent = data.currentConditions.temp + " F";
        icon.textContent = data.currentConditions.conditions;
        humidity.textContent ="Humidity: "+ data.currentConditions.humidity+" %";
        feelslike.textContent = "Feelslike: "+ data.currentConditions.feelslike+ " F";
        description.textContent = "Description: "+ data.description;
        fillIcon(data.currentConditions.icon);
    })
    .catch(error =>{
        console.log("Invalid City: " +error);
    });
});

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
