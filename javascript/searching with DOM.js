// const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement("div");
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     "</div>",
//   ].join("");

//   alertPlaceholder.append(wrapper);
// };

// const alertTrigger = document.getElementById("liveAlertBtn");
// if (alertTrigger) {
//   alertTrigger.addEventListener("click", () => {
//     appendAlert("Nice, you triggered this alert message!", "success");
//   });
// }

//change the card title to red
let ctitle = document.getElementsByClassName("card-title")[0];
ctitle.style.color = "red";

let ctitles = document.querySelectorAll(".card-title");
ctitles[0].style.color = "blue";
ctitles[1].style.color = "violet";
ctitles[2].style.color = "green";
console.log(ctitles);

document.querySelector(".this").style.color = "red";
document.querySelector(".this").style.background = "yellow";

console.log(document.getElementsByTagName("a"));
console.log(document.body.getElementsByTagName("a"));
console.log(document.querySelectorAll(".card").getElementsByTagName("a"));

console.log(document.getElementsByName("search"));
