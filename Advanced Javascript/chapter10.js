//Que1: usse aa fre api from the inteernal and feed your app with live da    ta
let url = "https://jsonplaceholder.typicode.com/posts";
let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((contests) => {
    console.log(contests);
    ihtml = "";
    for (item in contests) {
      console.log(contests[item]);
      ihtml += ` <div class="card" mx-2 my-2 style="width: 18rem">
     <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/nodejs_express_framework.png" class="card-img-top" alt="..." />
     <div class="card-body">
       <h5 class="card-title">${contests[item].title}</h5>
       <p class="card-text">
       ${contests[item].body}
       </p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>`;
    }

    cardContainer.innerHTML = ihtml;
  });
// Que 3:Repeat the last que & fetch the note which was saved
let n = localStorage.getItem("note");
alert("your note is " + n);

//Que2: Create a note saving app which store in localstorage
let a = prompt("Enter your note");
if (a) {
  localStorage.setItem("note", a);
}

//Que 4 : Delete the note in the previous Qustion
let c = confirm("Do you want to delete your note?");
if (c) {
  localStorage.removeItem("note");
  alert("delete note successfully");
}
