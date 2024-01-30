const changebodyRed = () => {
  document.body.firstElementChild.style.background = "red ";
};

let b = document.body;
console.log("First child of b", b.firstChild);
console.log("First Element child of b", b.firstElementChild);
