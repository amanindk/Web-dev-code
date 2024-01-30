// async function deep() {
//   return 77;
// }
// deep().then((Y) => {
//   alert(Y);
// });

async function deep() {
  let delhiweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data 27");
    }, 2000);
  });
  let Mumbaiweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data 21");
    }, 4000);
  });
  //   delhiweather.then(alert);
  //   Mumbaiweather.then(alert);
  console.log("fetching delhi weather please wait.........");
  let delhiW = await delhiweather;
  console.log("fetched Delhi weather is " + delhiW);

  console.log("fetching Mumbai weather please wait.........");
  let MumbaiW = await Mumbaiweather;
  console.log("fetched Mumbai weather is " + MumbaiW);
  return [delhiW, MumbaiW];
}
const tech = () => {
  console.log("i am  deeptech nd i am not waiting");
};
let main1 = async () => {
  console.log("welcome to wheather control room ");
  let a = await deep();
  let b = await tech();
  //   a.then((value) => {
  //     console.log(value);
  //   });
};
main1();
