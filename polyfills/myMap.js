// arr.map((ele,index,arr)=>{
//     return ele,index,arr
// })

Array.prototype.customMap = function (cb) {
  let returnArray = [];
  for (let i = 0; i < this.length; i++) {
    returnArray.push(cb(this[i], i, this));
  }
  return returnArray;
};

const arr = [1, 2, 3, 4, 5];
const multiplyBy5 = arr.customMap((ele) => {
  return ele * 5;
});
console.log(multiplyBy5);
