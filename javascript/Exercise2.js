let user = prompt("Enter the S, W, G");
let cpui = M.floor(Math.random() * 3);
let cpu = ["S", "G", "W"][cpui];

const match = (cpu, user) => {
  if (cpu === user) {
    return "Nobody.Match is tied ";
  } else if (cpu === "S" && user === "W") {
    return "cpu";
  } else if (cpu === "S" && user === "G") {
    return "user";
  } else if (cpu === "w" && user === "G") {
    return "cpu";
  } else if (cpu === "G" && user === "W") {
    return "user";
  } else if (cpu === "G" && user === "S") {
    return "cpu";
  } else if (cpu === "W" && user === "S") {
    return "user";
  } else if (cpu === "W" && user === "G ") {
    return "cpu";
  }
};
let result = match(cpu, user);
document.write(`cpu:${cpu} and user:${user} \nThe winner is:${result}`);
