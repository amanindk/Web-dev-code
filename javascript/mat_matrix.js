var rowAndMaximumOnes = function (mat) {
  let x = [];
  for (let i = 0; i < mat.length; i++) {
    var count = 0;

    for (let j = 0; j < mat.length; j++) {
      if (mat[i][j] == 1) {
        count += 1;
      }
    }
    x.push(count);
  }
  let max = 0;
  let index = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
      index = 1;
    }
  }
  let y = [];
  y.push(index);
  return y;
};
