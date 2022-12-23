// arr.filter((ele) => ele > 2);

Array.prototype.customFilter = function (callback) {
  let filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) filteredArray.push(this[i]);
  }
  return filteredArray;
};

const arr = [1, 2, 3, 4, 5];
const filterBy2 = arr.customFilter((ele, idx, arr) => {
  return ele > 2;
});
console.log(filterBy2);
