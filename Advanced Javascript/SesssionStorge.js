// let key = prompt("Enter key you want to set ");
// let value = prompt("Enter value you want to set ");

// sessionstorage.setItem(key, value);

// console.log(`The value at ${key} is ${sessionstorage.getItem(key)}`);

// if (key == "red" || key == "blue") {
//   sessionstorage.removeItem(key);
// }

// if (value == 0) {
//   sessionstorage.clear();
// }

window.onstorage = (e) => {
  alert("Changed");
  console.log(e);
};
