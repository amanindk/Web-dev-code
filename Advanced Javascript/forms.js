function val() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var conpass = document.getElementById("conpass").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;

  document.getElementById("userr").innerHTML = "";
  document.getElementById("passs").innerHTML = "";
  document.getElementById("conpasss").innerHTML = "";
  document.getElementById("mobilee").innerHTML = "";
  document.getElementById("emaill").innerHTML = "";

  if (user == "") {
    document.getElementById("userr").innerHTML = "**please enter ur name";
    return false;
  }
  if (user.length <= 5 || user.length > 20) {
    document.getElementById("userr").innerHTML =
      "**user length must be between 5 to 20";
    return false;
  }
  if (!isNaN(user)) {
    document.getElementById("user").innerHTML = "**only character are allowed";
    return false;
  }

  if (pass == "") {
    document.getElementById("passs").innerHTML = "enter ur password";
    return false;
  }
  if (pass.length <= 5 || pass.length > 20) {
    document.getElementById("passs").innerHTML =
      "password length must be between 5 to 20";
    return false;
  }

  if (conpass != pass) {
    document.getElementById("conpasss").innerHTML = "password not matching";
    return false;
  }
  if (conpass == "") {
    document.getElementById("conpasss").innerHTML = "please confirm filed";
    return false;
  }

  if (mobile == "") {
    document.getElementById("mobilee").innerHTML = "please enter ur mobile no.";
    return false;
  }
  if (isNaN(mobile)) {
    document.getElementById("mobile").innerHTML = "user must write digits only";
    return false;
  }
  if (mobile.length != 10) {
    document.getElementById("mobilee").innerHTML =
      "mobile no. must be 10 digits only";
    return false;
  }

  if (email == "") {
    document.getElementById("emaill").innerHTML = "please enter your email";
    return false;
  }
  if (email.indexOf("@") <= 0) {
    document.getElementById("emaill").innerHTML = "@ invalid position";
    return false;
  }
  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    document.getElementById("emaill").innerHTML = ".invalid position";
    return false;
  }
}
