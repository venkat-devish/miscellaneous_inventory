const arr = [2, 4, 6, 8, 10];

const mapRes = arr.map((ele) => {
  return ele ** 2;
});

console.log(mapRes);

const forEachRes = arr.forEach((ele, i) => {
  arr[i] = ele * 5;
});

console.log(arr);
