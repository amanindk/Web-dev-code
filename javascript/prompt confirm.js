/*
alert("aman kaisee ho");

//prompt
let age = prompt("how old are you", 100);
alert(`you are ${age} year old`);

// confirm
let isboss = confirm("Are you my boss");
alert(isboss);

//Create a web-page that asks for a name and outputs it.
let name = prompt("What is your name?", "");
alert(name);

*/

let a = prompt("Enter a here");
a = Number.parseInt(a);
alert(" you enter  a of type " + typeof a); // you enter  a of type string

let write = confirm("Do you wnt to write it to the page ");
if (write) {
  document.write(a);
} else {
  document.write(" please allow me to write  ");
}
