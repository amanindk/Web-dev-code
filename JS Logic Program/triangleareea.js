//find the areea of  triangle

// to find the areea of angled triangle =====================================================================================
let base = prompt("enter the base Value", " ");
let height = prompt("enter the height Value", " ");
let area = (base * height) / 2;
console.log(area);
document.write("base :" + base + " height :" + height + " area:" + area);

//to find the area of regular triangle =====================================================================================
let a = 12;
let b = 10;
let c = 15;

// let a = prompt("Enter the a value");
// let b = prompt("Enter the b value");
// let c = prompt("Enter the c value");
let s = (a + b + c) / 2;
let area1 = s * (s - a) * (s - b) * (s - c);
// let triangle = (m = Math.sqrt(area1));
let triangle = Math.sqrt(area1);
// document.write(triangle);
// console.log(triangle);

document.write(triangle);
document.write(area1);
