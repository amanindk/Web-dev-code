console.log("aman");

console.log(console);
console.error("hello Aman");
console.clear;

obj = {
  a: 12,
  b: 21,
  c: 55,
};
console.table(obj);
console.warn("hello");
console.info("hello");

console.assert("err" != false);
console.assert("err" == false);

console.time("forloop");
for (let i = 0; i < 6; i++) {
  console.log(345);
}
console.timeEnd("forloop");

console.time("Whileloop");
let i = 0;
while (i < 7) {
  console.log(345);
  i++;
}

console.timeEnd("whileloop");
