/*
class hello {
  message() {
    document.write("hello");
    // document.write("Aman");
  }
}
var a = new hello();
a.message();
var f = new hello();
f.message();
*/
class student {
  constructor(name, age) {
    this.studentname = name;
    this.studentage = age;
  }
  biodata() {
    document.write(
      "hello i am " +
        this.studentname +
        " my age is " +
        this.studentage +
        "<br><br>"
    );
  }
}
class player extends student {
  constructor(name, age, game, height) {
    super(name, age, game, height);
    this.mygame = game;
    this.myheight = height;
  }
  biodata1() {
    doocument.write(
      "hello i am " +
        this.studentname +
        " my age is " +
        this.studentage +
        " my favourite game is " +
        this.mygame +
        " may height is " +
        this.myheight +
        "<br>"
    );
  }
}
var a = new student("Amit", 23);
a.biodata();
var a = new player("raju", 13, "football", 3.3);
a.biodata();
