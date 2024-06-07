// const { hello, ahello } = require("./modules1"); //common JS
import hey, { hello, ahello } from "./modules2.js";
// console.log(hello()); //hello Aman  undefined

hello();
ahello("Ramu");
ahello("Rajanu");
ahello("Raju");
ahello("Ralu");
ahello("Rani");

hey();
