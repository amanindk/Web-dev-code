const changebodyRed = () => {
  document.body.firstElementChild.style.background = "red ";
};

let b = document.body;
console.log("First child of b", b.firstChild);
console.log("First Element child of b", b.firstElementChild);

var element1 = document.getElementById("myElement1");
element1.textContent = "<strong>Aman</strong>";

var element2 = document.getElementById("myElement2");
element2.innerHTML = "<strong>Aman</strong>";
