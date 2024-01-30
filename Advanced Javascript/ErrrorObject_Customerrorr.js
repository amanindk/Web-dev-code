try {
  let age = prompt("Enter our age ");
  age = Number.parseInt(age);
  if (age > 98) {
    throw new ReferenceError("Aman is not good");
  }
  // console.log(aman);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

console.log("the script is still running");
