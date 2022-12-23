const arr = [1, 2, 3, 4, 5, 6, 7];

// ----------------------------------------------
const mapParams = arr.map((ele, index, arr) => {
  return [ele, index, arr];
});
console.log(mapParams);

const multiplyBy5 = arr.map((el) => el * 5);
console.log(multiplyBy5);

//-------------------------------------------------
const filterParams = arr.filter((ele, index, arr) => {
  console.log(ele, index, arr);
  return [ele > 5, index, arr];
});

const filterBy10 = arr.filter((el) => {
  return el > 5;
});
console.log(filterBy10);

//--------------------------------------------------
const reducerParams = arr.reduce((acc, curr, i, arr) => {
  console.log(curr, i, arr);
}, 0);

const sumAll = arr.reduce((acc, curr) => {
  return acc + curr;
});

console.log(sumAll);
