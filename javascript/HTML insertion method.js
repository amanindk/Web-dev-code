let a = document.getElementsByTagName("div")[0];

// a.innerHTML = a.innerHTML + "<h1>Hello Words!</h1>";
// console.log(webciwecui);

let div = document.createElement("div");
div.innerHTML = "<h1>Hello World!</div>";
// a.appendChild(div);
a.prepend(div);
// a.before(div);
a.after(div);
a.replaceWith(div);
