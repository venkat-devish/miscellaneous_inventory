// arr.reduce(acc,curr,i,arr=>return acc+curr)

Array.prototype.customReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i]) : this[i];
  }
  return accumulator;
};

const arr = [1, 2, 3, 4, 5];
const reduceArray = arr.customReduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(reduceArray);
