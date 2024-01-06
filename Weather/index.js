

let container=document.getElementById('container')
let map= document.getElementById('mapdynamic')
let key="edf7de858e0b33e5676b91e5df384dae";
async function getWeather(){
    try{
       let city = document.getElementById('city').value;
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
     let data = await res.json();
     appenddata(data);
  
     console.log(data)
}
catch(err){
    console.log(err);
}
}

function appenddata(data){
   let name = document.createElement('p')
   name.innerText = `Name -${data.name}`

   let temp = document.createElement('p')
   temp.innerText = `Temp -${data.main.temp}`

   let humidity = document.createElement('p')
   humidity.innerText = `Humidity -${data.main.humidity}`
   container.innerHTML = '';
   container.style.border = '1px solid black';
   container.append(name,temp,humidity)
map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=14&ie=UTF8&iwloc=&output=embed`

   

}


