let a = document.getElementByClassName("container")[0];
a.onclick = () => {
  let b = document.getElementByClassName("container")[0];
  b.innerHTML = "hello world";
};
