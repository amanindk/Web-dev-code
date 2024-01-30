console.log(document.cookie);
document.cookie = "name=Aman11223344";
document.cookie = "name2=Aman11deep";

let key = prompt("Enter the key ");
let value = prompt("Enter the value ");
// document.cookie = `${key}=${value}`;
document.cookie = `${encodeURIComponentkey}=${encodeURIComponentvalue}`;
console.log(document.cookie);
