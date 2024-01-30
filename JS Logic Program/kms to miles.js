function convert() {
  var kms = document.getElementById("data").value;
  const factor = 0.621371;
  var miles = kms * factor;
  document.getElementById("res").innerText = `${miles} miles`;
  //   document.getElementById("res").innerText = miles + "milles";
}
