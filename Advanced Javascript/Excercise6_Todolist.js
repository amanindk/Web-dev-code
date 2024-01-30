submit.addEventListener("click", (e) => {
  e.preventDefault(); // isse page relod nhi hotaa
  let title = title.value;
  let desc = desc.value;
  localStorage.setItem("todo", JSON.stringify([title, desc]));
  console.log(e);
  todo.innerHTML = `<h1> ${title} </h1>
  <p>${desc}</p>
  `;
  title.value = "";
  desc.value = "";
});

deletebtn.addEventListener("click", (e) => {
  e.preventDefault(); // isse page relod nhi hotaa
  localStorage.removeItem("todo");
  alert("delete successfully");
  todo.innerHTML = "";
});
