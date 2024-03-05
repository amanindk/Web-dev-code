submit.addEventListener("click", (e) => {
  e.preventDefault();
  let titlec = title.value;
  let descc = desc.value;
  localStorage.setItem("todo", JSON.stringify[titlec, descc]);
  console.log(e);
});
