//Hell callback function & Pyramid of doom
/*
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("src:" + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Error loading script with src:" + src);
    callback(new Error("src got some error"));
  };
  document.body.appendChild(script);
}
loadScript(
  "https://cdn.jsdeliv.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
  function hello(error, src) {
    if (error) {
      console.log(error);
      sendEmergencyMessageToCool();
      return;
    }

    loadScript(
      "https://cdn.jsdeliv.net/npm/bootstrap@5.3.2/dist/js/bootstrap2.bundle.min.js",
      function hello(error, src) {
        if (error) {
          console.log(error);
          sendEmergencyMessageToCool();
          return;
        }

        loadScript(
          "https://cdn.jsdeliv.net/npm/bootstrap@5.3.2/dist/js/bootstrap3.bundle.min.js",
          function hello(error, src) {
            if (error) {
              console.log(error);
              sendEmergencyMessageToCool();
              return;
            }

            loadScript(
              "https://cdn.jsdeliv.net/npm/bootstrap@5.3.2/dist/js/bootstrap4.bundle.min.js",
              function hello(error, src) {
                if (error) {
                  console.log(error);
                  sendEmergencyMessageToCool();
                  return;
                }

                loadScript(
                  "https://cdn.jsdeliv.net/npm/bootstrap@5.3.2/dist/js/bootstrap5.bundle.min.js",
                  function hello(error, src) {
                    if (error) {
                      console.log(error);
                      sendEmergencyMessageToCool();
                      return;
                    }

                    loadScript(
                      "https://cdn.jsdeliv.net/npm/bootstrap@5.3.2/dist/js/bootstrap6.bundle.min.js",
                      function hello(error, src) {
                        if (error) {
                          console.log(error);
                          sendEmergencyMessageToCool();
                          return;
                        }

                        loadScript(
                          "https://cdn.jsdeliv.net/npm/bootstrap@5.3.2/dist/js/bootstrap7.bundle.min.js",
                          function hello(error, src) {
                            if (error) {
                              console.log(error);
                              sendEmergencyMessageToCool();
                              return;
                            }

                            loadScript(
                              "https://cdn.jsdeliv.net/npm/bootstrap@5.3.2/dist/js/bootstrap8.bundle.min.js",
                              function hello(error, src) {
                                if (error) {
                                  console.log(error);
                                  sendEmergencyMessageToCool();
                                  return;
                                }

                                loadScript(
                                  "https://cdn.jsdeliv.net/npm/bootstrap@5.3.2/dist/js/bootstrap8.bundle.min.js",
                                  function hello(error, src) {}
                                );
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);
*/

//callbck function && hell callback function
function getcheese(callback) {
  setTimeout(() => {
    const cheese = "🧀";
    console.log("here is cheese", cheese);
    callback(cheese);
  }, 3000);
}
function makedough(cheese, callback) {
  setTimeout(() => {
    const dough = cheese + "🍞";
    console.log("here is the dough", dough);
    callback(dough);
  }, 3000);
}

function bakepizza(dough, callback) {
  setTimeout(() => {
    const pizza = dough + "🍕";
    console.log("baking pizza", pizza);
    callback(pizza);
  }, 3000);
}
function eatingpizza(pizza, callback) {
  setTimeout(() => {
    const eat = (pizza = "😀");
    console.log("eating the pizza", eat);
    callback(eat);
  }, 3000);
}
function aftereat(eat, callback) {
  setTimeout(() => {
    const walking = eat + "🚶‍♀️";
    console.log("walking", walking);
    callback(walking);
  }, 2000);
}
getcheese((cheese) => {
  makedough(cheese, (dough) => {
    bakepizza(dough, (pizza) => {
      eatingpizza(pizza, (eat) => {
        aftereat(eat, (walking) => {
          console.log("now eating after walking", walking);
        });
      });
    });
  });
});
