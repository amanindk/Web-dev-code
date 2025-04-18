/*
let p = fetch("https://goweather.herokuapp.com/weather/Curitiba");
p.then((response) => {
  console.log(response.status);
  console.log(response.ok);
  console.log(response.headers);
  return response.json();
}).then((value2) => {
  console.log(value2);
});
*/
let p = fetch("https://goweather.herokuapp.com/weather/Curitiba");
p.then((value1) => {
  console.log(value1.status);
  console.log(value1.ok);
  return value1.json();
}).then((value2) => {
  console.log(value2);
});
