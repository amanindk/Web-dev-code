function convert1() {
  var C = document.getElementById("data1").value;
  var F = C * 1.8 * 32;
  document.getElementById("res1").innerText = `${C} C = ${F} F`;
}
