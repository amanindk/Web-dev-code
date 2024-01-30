//var this = "window"
function x() {
  debugger;

  var fx = "1st functionn part 1";
  console.log(fx);
  y();

  console.log("mai kab aunga");
}
function y() {
  debugger;

  console.log("2nd funcion part 2");
  z();
}
function z() {
  debugger;

  console.log("3rd function part 3");
}

debugger;
x();
