// Method overriding
/*
class Employee {
  login() {
    console.log(`Employee has logged in `);
  }
  logout() {
    console.log(`Employee has logged out `);
  }
  requstleaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves  Auto aproved `);
  }
}

class Programmer extends Employee {
  coffee(x) {
    console.log(`Programmer has coffee ${x}`);
  }
  requstleaves(leaves) {
    super.requstleaves(4);
    console.log("one extra is granted");
    // console.log(`Employee has requested ${leaves + 1}  leaves (one extra) `);
  }
}

let a = new Programmer();
a.login();
a.requstleaves(8);
*/

// Constructer overriding
class Employee {
  constructor(name) {
    console.log(`${name} Employee constructor called `);
    this.name = name;
  }
  login() {
    console.log(`Employee has logged in `);
  }
  logout() {
    console.log(`Employee has logged out `);
  }
  requstleaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves  Auto aproved `);
  }
}

class Programmer extends Employee {
    constructor(name) {
        super(name);
        this.name = name;   // this hmesha super kee baad hi lgee ga nhi to eerror dehka degaa
    console.log(`${name} Programmer constructor called `);
  }
  //   constructor(...args) {  if there is no constructor in the child class, this is created automatically
  //     super(...args);
  //   }
  coffee(x) {
    console.log(`Programmer has coffee ${x}`);
  }
  requstleaves(leaves) {
    super.requstleaves(4);
    console.log("one extra is granted");
    // console.log(`Employee has requested ${leaves + 1}  leaves (one extra) `);
  }
}

let a = new Programmer("Aman");
a.login();
a.requstleaves(8);
