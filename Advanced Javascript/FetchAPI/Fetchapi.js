const url = "https://jsonplaceholder.typicode.com/todos";
const facttitle = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// Example 1 API Fetch
const getfacts = async () => {
  console.log("getting data......");
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  console.log(data[0].title);
  facttitle.innerText = data[0].title;
};

// Example 2 API Fetch
function getfacts() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      facttitle.innerText = data[0].title;
    });
}

btn.addEventListener("click", getfacts);
