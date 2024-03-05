// const inputbox = document.getElementById("input-box");
// const listcontainer = document.getElementById("list-container");

function addTask() {
  if (inputbox.value === "") {
    alert("you somthing Wrrite now");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "/u00d7";
    li.appendChild(span);
  }
  inputbox.value = " ";
}

const inputbox = document.querySelector("#input-box");
const listcontainer = document.querySelector("#list-container");

inputbox.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    console.log(event.key);
  }
});
