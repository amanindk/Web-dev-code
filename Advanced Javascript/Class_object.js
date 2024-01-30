class Railwayform {
  Submit() {
    alert(this.name + "  Your Form is  Submit " + this.number);
  }
  cancel() {
    alert(this.name + "  form is cancelld  " + this.number);
  }
  fill(givenname, trainno) {
    this.name = givenname;
    this.number = trainno;
  }
}
//create the form Aman
let amanform = new Railwayform();
amanform.fill("Amandeep", 222222);

//create the form Aman
let rohanform = new Railwayform();
let rohanform1 = new Railwayform();
rohanform.fill("Rohan", 333333);
rohanform1.fill("Rohan", 444444);

amanform.Submit();
rohanform.Submit();
rohanform1.Submit();
rohanform1.cancel();
