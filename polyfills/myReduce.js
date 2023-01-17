// const data = [1, 2, 3, 4, 5];
// let tot = 0;
// const res = data.reduce((acc, curr, i, arr) => {
//   tot = acc + curr;
//   return tot;
// }, 0);

// console.log(res);

Array.prototype.myReduce = function (cb, initialValue) {
  var acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const data = [1, 2, 3, 4, 5];
const res = data.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(res);
