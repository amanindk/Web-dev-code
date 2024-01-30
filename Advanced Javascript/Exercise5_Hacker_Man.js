let a = [
  "Initailing the tool....",
  "Connecting to Facebook....",
  "connecting the server....",
  "Don't call Police.....",
  "Finding your Data....",
  "Connecting Successfully.... ",
  "Username Amandeep....",
  "Trying Brute Force....",
  "200k password tried....",
  "Match Not found....",
  "Another 200k password tried....",
  "Match Not found....",
  "Accessing successfully.......",
  "Your Account Hack......",
  "Loading.......",
];
const sleep = async (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

const showhack = async (message) => {
  await sleep(2);
  //   console.log(message);
  text.innerHTML = text.innerHTML + message + "<br>";
};

(async () => {
  for (let i = 0; i < a.length; i++) {
    await showhack(a[i]);
  }
})();
