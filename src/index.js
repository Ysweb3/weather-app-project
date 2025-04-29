import "./styles.css";

async function getWeather(value){
    try{
        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+value+"/?key=B2TNXK8VZYBRPC8W7DCV9LYCA")
        const weatherData = await response.json();
        return weatherData;
    }
    catch (error){
        console.log("Invalid City " )
    }
}
// getWeather("india")
// .then(temp =>{
//     console.log(temp.currentConditions);
// })
// .catch(error =>{
//     console.log(error);
// });

console.log(getWeather("indi"))