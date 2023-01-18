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

function evaluate(param) {
  return function (a) {
    return function (b) {
      if (param === "sum") console.log(a + b);
      else if (param === "multiply") console.log(a * b);
      else if (param === "divide") console.log(a / b);
      else if (param === "subtract") console.log(a - b);
      else console.log("Invalid Operation");
    };
  };
}

evaluate("sum")(4)(2);
evaluate("multiply")(4)(2);
evaluate("divide")(4)(2);
evaluate("subtract")(4)(2);

const sum = (a) => {
  return (b) => {
    if (b) return sum(a + b);
    return a;
  };
};

console.log(sum(1)(2)(3)(4)(5)());

function updateElement(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const update = updateElement("heading");
update("Curry");
