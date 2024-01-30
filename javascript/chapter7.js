// Problem 1: Create a navbar and change the color of its first element to red

document.getElementsByTagName("nav")[1].firstElementChild.style.color = "red";

// Create  a table with out tbody . Now use " view page source" button to check whether it has  a tbody or not

//NO

//Create n element with 3children . Now change the color of first nd last element to green
document.getElementsByTagName("ul")[0].firstElementChild.style.color = "yellow";
document.getElementsByTagName("ul")[0].lastElementChild.style.color = "yellow";

//change
Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "red";
});
