function final() {
  try {
    let a = 0;
    console.log(Program);
    console.log("Prograam is successfully run");
    return;
  } catch {
    console.log("This is an error");
    console.log(deep);
  } finally {
    console.log("I am a goood boy");
  }
}
final();
