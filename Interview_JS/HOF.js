function sayname(name = "") {
  console.log(`hello Infinity Soft Solution ${name}`);
}

sayname("company");

function sayname1(callback) {
  return callback;
}

function success() {
  console.log("success");
}

sayname1(success);
sayname1(success);

function fetchdata(callback) {
  console.log("Please Wait");
  setTimeout(function () {
    console.log("Executed after 3 Sec");
    callback();
  }, 3000);
}

fetchdata(function () {
  console.log("Welcome my Company");
});

// this is Higher order function
