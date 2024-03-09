const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("you somthing Wrrite now");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "/u00d7";
    li.appendChild(span);
  }
  inputBox.value = " ";
}

// const inputbox = document.querySelector("#input-box");
// const listcontainer = document.querySelector("#list-container");

inputBox.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    console.log(event.key);
  }
});
