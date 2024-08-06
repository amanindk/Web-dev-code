function convert() {
  var kms = document.getElementById("data").value;
  var factor = 0.621371;
  var miles = kms * factor;
  document.getElementById("res").innerText = `kms ${kms} = miles ${miles}`;
}
