const SubmitBtn = document.getElementById("SubmitBtn");
const CityName = document.getElementById("CityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const weather_status = document.getElementById("weather_status");
const day = document.getElementById("day");
const date = document.getElementById("date");
const datahide = document.querySelector('.middle_layer');
const cityhide = document.querySelector("#city_name");

const today = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
day.innerText = days[today.getDay()];
const date_name = `${months[today.getMonth()]} ${today.getDate()}`;
date.innerText = date_name;


const getdata = async(event) =>{

    event.preventDefault();
    let cityval = CityName.value;
   

    if(cityval=="")
    {
        city_name.innerText = "please inter a city name";
        datahide.classList.add("data_hide");

    }
    else
    {
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=03ac4d97dd147d01ba5c7d1a29006244&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            const status = arrdata[0].weather[0].main;


            city_name.innerText = `${arrdata[0].name} , ${arrdata[0].sys.country}`;
            temp.innerText = `${arrdata[0].main.temp}`;
            if(status == "Haze")
            {
                weather_status.innerHTML = "<i class='fas fa-smog'> </i>";
            }
            else if(status=="Clear")
            {
                weather_status.innerHTML = "<i class='far fa-sun' style='color:yellow'></i>";
            }
            else if(status=="Cloud")
            {
                weather_status.innerHTML = "<i class='fas fa-cloud'></i>";
            }
            else if(status=="Rain")
            {
                weather_status.innerHTML = "<i class='fas fa-cloud-rain'></i>";
            }
            else
            {
                weather_status.innerHTML = "<i class='far fa-sun' style='color:yellow'></i>";
            }
            // weather_status.innerText=status;

            
            datahide.classList.remove("data_hide");
            cityhide.classList.remove("text-muted");
           
        }
        catch{
            city_name.innerText = "please inter a valid city name";
            datahide.classList.add("data_hide");
            cityhide.classList.add("text-muted");
        }
       
    }
}

SubmitBtn.addEventListener('click',getdata);