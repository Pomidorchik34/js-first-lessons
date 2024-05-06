import products from "./data.js";

//

// 9dars

//

// 1

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];
// function getStudentsGrade(students, grade) {
//   students.map((el) => {
//     if (el.percent > 85) {
//       el.grade = 5;
//     } else if (el.percent < 85 && el.percent > 70) {
//       el.grade = 4;
//     } else if (el.percent < 70 && el.percent > 60) {
//       el.grade = 3;
//     }
//   });
//   let filteredStudents = students
//     .filter((ball) => ball.grade == grade)
//     .map((el) => el.name);
//   return filteredStudents;
// }
// console.log(getStudentsGrade(students, 5));

// 2

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// let obj = {};
// animals.forEach((curVal) => {
//   if (obj[curVal] == undefined) {
//     obj[curVal] = 1;
//   } else {
//     obj[curVal] += 1;
//   }
// });
// console.log(obj);

//

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// const wordCount = animals.reduce((countObj, animal) => {
//   if (!countObj[animal]) {
//     countObj[animal] = 1;
//   } else {
//     countObj[animal]++;
//   }
//   return countObj;
// }, {});
// console.log(wordCount);

// 3

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((el) => el ** 2);
// console.log(newArr);

// 4

// let arr = [1, -4, 12, 0, -3, 29, -150];
// let newArr = arr
//   .filter((num) => num > 0)
//   .reduce((acc, curVal) => {
//     return acc + curVal;
//   });
// console.log(newArr);

// 5

// let str = "George Raymond Richard Martin";
// let res = str
//   .split(" ")
//   .map((words) => words[0])
//   .join("");
// console.log(res);

// 6

// let arr = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 97 },
//   { name: "Jeniffer", age: 65 },
// ];
// let res = arr.sort((el1, el2) => {
//   return el1.age - el2.age;
// });
// let javob = res[res.length - 1].age - res[0].age;
// console.log(javob);

// 7

// let arr = [1, 4, 9, 16, 7, 8, 2, 3, 25];
// let juft = arr.filter((el) => el % 2 == 0);
// let toq = arr.filter((el) => el % 2 == 1);
// console.log("juft", juft);
// console.log("toq", toq);

// 8

// let arr = [1, 4, 9, 16, , 4, 6, 7, 6, 4, 25];
// let res = arr.reduce((acc, curVal) => {
//   if (!acc.includes(curVal)) {
//     acc.push(curVal);
//   }
//   return acc;
// }, []);
// console.log(res);

// 9

// import products from "./data.js";

// let sortedById = products.sort((el1, el2) => {
//   return el1.id - el2.id;
// });
// console.log(sortedById);
// let sortedByPrice = products.sort((el1, el2) => {
//   return el1.price - el2.price;
// });
// console.log(sortedByPrice);

// 10

// let sortedByRating = products.sort((el1, el2) => {
//   return el2.rating - el1.rating;
// });
// console.log("Best product:", sortedByRating[0]);

// 11

// let sortedByPrice = products.sort((el1, el2) => {
//   return el1.price - el2.price;
// });
// console.log("Cheapest product:", sortedByPrice[0]);

// 12

// let costOfAlProducts = products.reduce((acc, curVal) => {
//   return acc + curVal.price;
// }, 0);
// console.log(costOfAlProducts + "$");

// 13

// const nameOfProducts = products.map((product) => product.title);
// console.log(nameOfProducts);

// 14

// const nameOfProduct = products.find((product) => product.id == 5);
// console.log(nameOfProduct.title);

// 15

// let filteredProducts = products.filter((product) => product.id != 4);
// console.log(filteredProducts);

// 16

// function isOnlyLetters(str) {
//   const lowercaseRange = "abcdefghijklmnopqrstuvwxyz";
//   const uppercaseRange = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const letters = str.split("");
//   return letters.every(
//     (char) => lowercaseRange.includes(char) || uppercaseRange.includes(char)
//   );
// }
// const text1 = "HelloWorld";
// console.log(isOnlyLetters(text1));

// 17

// let obj = {};
// let arr = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
// function getTruthyFalsy(arr) {
//   let truthy = arr.filter((el) => Boolean(el) == true);
//   let falsy = arr.filter((el) => Boolean(el) == false);
//   obj.truthy = truthy;
//   obj.falsy = falsy;
//   return obj;
// }
// console.log(getTruthyFalsy(arr));
