let students = [
  { name: "venkat", regNo: 31, marks: 80 },
  { name: "Ganesh", regNo: 15, marks: 69 },
  { name: "Jake sully", regNo: 16, marks: 35 },
  { name: "Neytri", regNo: 7, marks: 55 },
];

const stud = students.map((el) => el.name.toUpperCase());
console.log(stud);

const more_60 = students.filter((el) => el.marks > 60);
console.log(more_60);

const stud_name = students.filter((el) => el.marks > 60 && el.regNo > 15);
console.log(stud_name);

const sum_of_marks = students.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);
console.log(sum_of_marks);

const onlyNames = students.filter((el) => el.marks > 60).map((el) => el.name);
console.log(onlyNames);

// const stud_cmplx = students.forEach((ele, i) => {
//   students[i].marks =
//     ele.marks < 60 ? students[i].marks + 20 : students[i].marks;
// });

// const res = students.reduce((acc, curr) => {
//   return acc + curr.marks;
// }, 0);

// console.log(res);

const cmplx_2 = students
  .map((ele) => {
    if (ele.marks < 60) {
      ele.marks += 20;
    }
    return ele;
  })
  .filter((ele) => ele.marks > 60)
  .reduce((acc, curr) => {
    return acc + curr.marks;
  }, 0);
console.log(cmplx_2);
