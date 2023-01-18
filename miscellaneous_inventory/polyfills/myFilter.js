// data.filter((el) => el > 1);

Array.prototype.myFilter = function (cb) {
  temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const data = [5, 6, 7];
const res = data.myFilter((el) => {
  return el > 5;
});
console.log(res);
