const lat = document.getElementById('nairobi').value;
let url =
  `https://api.openweathermap.org/data/2.5/onecall?lat=${1.2921}&lon=${36.84}&exclude=hourly,daily&appid=8034d4f4b85ff01a4364cfd64ebd2248`;
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

async function dist(){
const {timezone,current:{sunrise,humidity,visibility,uvi:uvIndex}} = await getData();
console.log(timezone,sunrise,humidity,visibility,uvIndex)
document.getElementById('humidity').innerHTML=humidity;
document.getElementById('visibility').innerHTML=visibility;
document.getElementById('uvIndex').innerHTML=uvIndex;
}

dist();
