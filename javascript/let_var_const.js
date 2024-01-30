console.log("let_var_const");
var a = 45;
let b = "aman";
const author = "aman";
//let author = 6; //throw an error because constant cannot be change
var c = null;
var d = undefined;
{
  let b = "this";
  console.log(b);
}
console.log(b);

/*
                                 let 67aman = "Maan";  // Not allowed this will throw an error 
                                 let var = "Man"  //JS reserved words < Var > 
                                 */

/*
let message;
message = "hello";
alert(message);     // hello

let message1 = "hi";
message1 = "hnji";
message1 = "ram ji ";
alert(message1); // first hello and 2nd ram ji
*/

/*
                                  let hello = "Hello Words";
                                  let message;
                                  message = hello;
                                  let words;
                                  words = hello;
                                  alert(message);    // hello words
                                  alert(hello);       // hello words
                                  alert(words);       // hello words
                                  */

/*
const color_blue = "#00f";
const color_Orange = "#FF";
const color_Red = "#00f1";
const color_green = "#R0f3";

let color = color_Red;
alert(color);
*/

/*
                                            Declare two variables: admin and name.
                                            Assign the value "John" to name.
                                            Copy the value from name to admin.
                                            Show the value of admin using alert (must output “John”).
                                            
                                            let admin, name;
                                            name = "aman";
                                            admin = name;
                                            alert(admin);
                                            */
