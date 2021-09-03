const API_KEY = `81567e175205074b744bc4a8cd07db40`;
const errorHandel = document.getElementById('error');
const city = document.getElementById('city-names');


const searchtemarature = () =>{
    const cityText = city.value ; 
    city.value = '';

   if(cityText){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
   }
   else{
       errorHandel.innerText = 'Please try agein'
   }
    
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText =text ;
}

const displayTemperature = temperatuer =>{
    errorHandel.innerText = '';
    setInnerText('city', temperatuer.name);
    setInnerText('temp', temperatuer.main.temp);
    setInnerText('condition',temperatuer.weather [0].main);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperatuer.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}