const apiKey="c2cab51540b175cdf89189342cdbdb03";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const displayIcon=document.querySelector(".display-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl +city+ `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".display").style.display="none";
    }
    else{
    var data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    if(data.weather[0].main=="Clouds"){
        displayIcon.src="clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        displayIcon.src="clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        displayIcon.src="rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        displayIcon.src="drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        displayIcon.src="mist.png";
    }

    document.querySelector(".display").style.display='block';
    document.querySelector(".error").style.display="none";
}
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
