//Passing a function into another functions as a variable are called as first class functions

const square = function (num) {
  return num * num;
};

const displaySquare = function (fn) {
  console.log("FIrst Class", fn(5));
};

displaySquare(square);

//IIFE
(function square(num) {
  console.log("IIFE", num * num);
})(5);

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

//op
for (let i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
