const checkweather = async (name) => {
    const apiid = "a674612d35b2d30b3dd4d069fa5631ae";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiid}`;

    const res = await fetch(apiurl);
    const data = await res.json();

    if (data.cod !== 200) {
        document.querySelector("#err").style.display = "block";
        return;
    }
    else{document.querySelector("#err").style.display = "none";}
    
    document.querySelector("#country").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp )+ "Kelvins"
    document.querySelector("#des").innerHTML = data.weather[0].description;
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind").innerHTML = data.wind.speed + " km/hr";
    console.log(data);
};


    document.querySelector(".inp button").addEventListener("click", () => {
        const location = document.querySelector(".inp input").value;
        if (!location.trim()) return;
        checkweather(location);
    });


// checkweather("hyderabad");