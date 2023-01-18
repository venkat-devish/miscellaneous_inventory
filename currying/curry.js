function fun(a) {
  return function (b) {
    console.log(a, b);
  };
}

fun(5)(10);

function sum(a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
}

sum(2)(6)(1);
