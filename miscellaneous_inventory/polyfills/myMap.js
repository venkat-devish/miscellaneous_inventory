// const data = data.map((curr, index, arr) => {
//   return curr;
// });

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const data = [1, 2, 3];
const res = data.myMap((el) => {
  return el;
});

console.log(res);
