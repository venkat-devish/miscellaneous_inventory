function createBase(num) {
  return function (ref) {
    console.log(num + ref);
  };
}

var addSix = createBase(6);
addSix(15);
addSix(21);

function search() {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }

  return function (idx) {
    console.log(a[idx]);
  };
}

const closure = search();

console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(12);
console.timeEnd("12");

for (var i = 0; i <= 4; i++) {
  function inner(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  inner(i);
}

function counter() {
  var _counter = 0;

  function add(increment) {
    return (_counter += increment);
  }

  function retrieve() {
    return "count is " + _counter;
  }

  return {
    add,
    retrieve,
  };
}

const ref = counter();
ref.add(10);
console.log(ref.retrieve());

let view;
function likeThePost() {
  let view = "Venkat";
  count = 0;
  return function () {
    count > 0 ? console.log("Already Liked!") : console.log("Like", view);
    count++;
  };
}

const isLiked = likeThePost();
isLiked();
isLiked();
isLiked();
isLiked();
