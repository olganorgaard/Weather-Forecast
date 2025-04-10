const input = document.querySelector('#input');

const api ={
    endpoint:"https://api.openweathermap.org/data/2.5/",
    key:"d3803baa80a2161fbbff20eecf7e3c9c"
}

input.addEventListener('keydown', enter);

function enter(e){
    if(e.key === 'Enter'){
        getInfo(input.value);
    }
}

async function getInfo(data){
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metrics&appID=${api.key}`);
    const result = await res.json();    
    displayResult(result);
}

function displayResult(result){
    let city = document.querySelector('#city');
    city.innerHTML = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector('#temperature');
    let tempCelcium = (Math.floor(result.main.temp) - 273);
    temp.innerHTML = `${tempCelcium}<span>°</span>`;

    let feelsLike = document.querySelector('#feelsLike');
    let feelsLikeCelcium = (Math.floor(result.main.feels_like) - 273);
    feelsLike.innerHTML =`Feels like: `+ `${feelsLikeCelcium}<span>°</span>`;

    let conditions = document.querySelector('#conditions');
    conditions.textContent = `${result.weather[0].main}`;

    backgroundImage(result);

    let variation = document.querySelector('#variation');
    let minCelcium = (Math.floor(result.main.temp_min) - 273); 
    let maxCelcium = (Math.floor(result.main.temp_max) - 273);
    variation.innerHTML = `Max:` + `${maxCelcium}<span>°</span> ` + `Min: ` + minCelcium + `<span>°</span>`;

//DATE

    getOurDate();
}
function getOurDate(){
    const myDate = new Date;
    let showDate = document.querySelector('#date');
// Year 
    let year = myDate.getFullYear();

// Month
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[myDate.getMonth()];

// DATE 
    let todayDate = myDate.getDate();

//WEEK day
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[myDate.getDay()];

    showDate.innerHTML = `${day} ${todayDate} ${month} ${year}`
}

gsap.from("#city, #date, #temperature, #feelsLike, #conditions, #variation", {
    y: 500,
    opacity: 0,
    duration: 2,
    stagger: 0.5,
    delay: 1,
});
function backgroundImage(result) {
    let weather = result.weather[0].main;

    if (weather === "Clear") {
        document.body.style.backgroundImage =
            "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')";
    }

    if (weather === "Clouds") {
        document.body.style.backgroundImage =
            "url('https://images.unsplash.com/photo-1614959909713-128c622fad23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80')";
    }

    if (
        weather === "Mist" ||
        weather === "Smoke" ||
        weather === "Haze" ||
        weather === "Dust" ||
        weather === "Fog" ||
        weather === "Sand" ||
        weather === "Ash" ||
        weather === "Squall" ||
        weather === "Tornado"
    ) {
        document.body.style.backgroundImage =
            "url('https://images.unsplash.com/photo-1581608198007-4801faa3859a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80')";
    }

    if (weather === "Snow") {
        document.body.style.backgroundImage =
            "url('https://images.unsplash.com/photo-1636495426573-f87b56142abf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')";
    }

    if (weather === "Rain") {
        document.body.style.backgroundImage =
            "url('https://images.unsplash.com/photo-1501691223387-dd0500403074?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80')";
    }

    if (weather === "Drizzle") {
        document.body.style.backgroundImage =
            "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80')";
    }

    if (weather === "Thunderstorm") {
        document.body.style.backgroundImage =
            "url('https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')";
    }
}

