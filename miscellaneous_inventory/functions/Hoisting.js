var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

fun();

const fn = (s, x, y, ...numbers) => {
  console.log(x, y, numbers);
};

fn(5, 6, 3, 7, 9);

const square = (num) => {
  return num * num;
};

const displaySquare = (fn) => {
  console.log(fn(5));
};

displaySquare(square);
