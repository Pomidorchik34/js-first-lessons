import products from "./data.js";

// 1
// function getInitialOdds(n) {
//   let oddNumbers = [];
//   let k = 1;

//   for (let i = 1; i <= n; i++) {
//     if (i == 1) {
//       oddNumbers.push(i);
//     } else {
//       oddNumbers.push((k += 2));
//     }
//   }

//   return oddNumbers;
// }
// const result = getInitialOdds(5);
// console.log(result);

// 2
// function getEvenReverse(arr) {
//   let juftlar = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       juftlar.push(arr[i]);
//     }
//   }
//   return juftlar;
// }
// let berilganArr = [4, 5, 7, 8, 6, 9];
// let hosilbolganArr = getEvenReverse(berilganArr);
// console.log(hosilbolganArr);

// 3

// function getEvenReverse(arr) {
//     return arr.reverse();
// }

// var massiv = [1, 2, 3, 4, 5];
// console.log("Asl massiv:", massiv);
// console.log("Teskari tartibda:", getEvenReverse(massiv));

// 4
// function rangeSum(arr, k, l) {
// let arr = [1, 6, 9, 5, 8, 10, 20];
// let k = 3;
// let l = 5;

//   let sum = 0;
// let result = rangeSum(arr, k, l);
//   for (let i = k; i <= l; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(result);

// 6

// function indexes(arr) {
//   var resault = [];
//   for (var i = 0; i < arr.length; i += 2) {
//     resault.push(arr[i]);
//   }
//   return resault;
// }

// // Test qilish
// var massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Berilgan massiv:", massiv);
// console.log("Juft indexdagi elementlar:", indexes(massiv));

// 7
// function arrayRight(arr) {
//   if (arr.length <= 1) return arr;
//   let temp = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = temp;
//   return arr;
// }

// const son = [1, 5, 8, 9, 10];
// const son2 = arrayRight(son);
// console.log(son2);

//

// 9DARS

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

//

// let apple;
// let samsung;
// let infenix;

// const resault = products.reduce((acc, curVal) => {
//   if (acc[curVal]) {
//     acc[curVal] = acc[curVal] + 1;
//   } else {
//     acc[curVal] = 1;
//   }
//   return acc;
// });

//EXAM

// 1
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());

// 2

// let a = 1;
// let b = "1";
// if (a === b) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// if (a == b) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// // ==-qiymatini solishtiradi
// // ===-data typeini solishtiradi

// 3

// let recusion = 1;
// function recusive() {
//   console.log(recusion);
//   recusive();
// }
// recusive();

// 4

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const juft = arr.filter((n) => n % 2 !== 1);

// const toq = arr.filter((n) => n % 2 == 1);

// console.log(`juftlar ${juft}`);
// console.log(`toqlar ${toq}`);

// 5

// let str = `niiiiiiiiiiiiiiiiga`;
// function deleted() {
//   return str.split("").join("");
// }
// deleted();

// 6

// let a = [1, 2, 3, 4];
// let b = [5, 6, 7, 8];
// let all = a.concat(b);
// let resault = all.reduce((acc, current) => {
//   return acc + current;
// });
// console.log(resault);

// 7

// let str = `string`;
// var resault = [];
// for (let i = 0; i < str.length; i++) {
//   resault.push(str.at(i));
// }
// console.log(resault);

// 8

// let array = [1, 2, 3, 4, 5];
// function func(arr) {
//   let reverse = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
//   }
//   return reverse;
// }
// console.log(func(array));

// 9

// let str = `1230`;
// var resault = [];
// var search = str.search(0);
// for (let i = 0; i < str.length; i++) {
//   if (str[i] !== str[search]) {
//     resault.push(str[i]);
//   }
// }
// console.log(resault);

// 10

// let array = [5, 3, 9, 1, 7];
// function func(array) {
//   if (array.length === 0) {
//     return "Array bo'sh";
//   }
//   let resault = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < resault) {
//       resault = array[i];
//     }
//   }
//   return (resault ** 4).toString();
// }

// console.log(func(array));

// 1
// let arr = [1, 2, 3];
// console.log(arr.reverse());

// 2
// let n = 1;
// let str = `1`;
// // == qiymatini hisoblaydi
// if (n == str) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// // === data typini hisoblaydi
// if (n === str) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 3
// function func(recursive) {
//   console.log(`recursive`);
//   func();
// }
// func();

// 4
// let arr = [1, 2, 3, 4];
// let resault1 = arr.filter((n) => n % 2 !== 1);
// let resault2 = arr.filter((n) => n % 2 == 1);
// console.log(resault1, resault2);

// 5
// let str = `str`;
// console.log(str.slice(0, 0));

// 6
// let arr = [1, 3, 5, 7];
// let array = [2, 4, 6, 8];
// let allArray = arr.concat(array);
// let resault = allArray.reduce((acc, current) => {
//   return acc + current;
// }, 0);
// console.log(resault);

// 7
// let str = `str`;
// console.log(str.split(0, 0));

// 8
// function func() {
//   let array = [1, 2, 3, 4, 5];
//   let reverse = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     reverse.push(array[i]);
//   }
//   return reverse;
// }
// console.log(func());

// 9
// let str = `1230`;
// var search = str.search(0);
// var resault = [];
// for (let i = 0; i < str.length; i++) {
//   if (str[i] !== str[search]) {
//     resault.push(str[i]);
//   }
// }
// console.log(resault);

// 10
// let array = [5, 3, 9, 2, 7];
// function func(array) {
//   if (array.length === 0) {
//     return "Array bo'sh";
//   }
//   let resault = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < resault) {
//       resault = array[i];
//     }
//   }
//   return (resault ** 4).toString();
// }

// console.log(func(array));
