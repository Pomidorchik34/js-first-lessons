//MESSEGE
let messege = " javascript ";

//INDEX OF
let io = messege.indexOf("a");
console.log(io);

//LAST INDEX OF
let lio = messege.lastIndexOf("a");
console.log(lio);

//SLICE
let sli = messege.slice(4, 10);
console.log(sli);

//SUBSTRING
let ssg = messege.substr(0, 4);
console.log(ssg);

//REPLACE
let rpe = messege.replace("java", "flowgoritm");
console.log(rpe);

//CHARAT
let cat = messege.charAt(1);
console.log(cat);

//TOUPERCASE
let tee = messege.toUpperCase();
console.log(tee);

//TOLOWERCASE
let twe = messege.toLowerCase();
console.log(twe);

//TRIM
let trm = messege.trim();
console.log(trm);

//SPLIT
let spt = messege.split(" ");
console.log(spt);

//HOMEWORK
let ism = prompt("Ismingizni kiriting:");
let birinchiHarf = ism.charAt().toUpperCase();
let davomi = ism.slice(1).toLowerCase();
let result = birinchiHarf + davomi;
alert(`Salom, ${result}`);
