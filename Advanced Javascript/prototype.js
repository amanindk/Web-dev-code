let a = {
  name2: "rita",
  company: "samalproducts",
  run: () => {
    alert("self run");
  },
};
console.log(a);

let p = {
  run: () => {
    alert("run");
  },
};

a.__proto__ = {
  name: "rajjju",
};

a.__proto__ = p;
a.run();
console.log(a.name);
