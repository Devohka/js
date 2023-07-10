// 1
// const user = {
//   hobby: "hobby",
//   premium: "premium",
//   addKeys() {
//     return (this.mood = "happy");
//   },
//   removeValues() {
//     return (this.hobby = "skydiving");
//   },
//     removeKeys() {
//     for(const key of Object.keys(user)){
//     return this.premium = false;
// };
    
//   },
// };
// // console.log(user);
// // console.log(user.addKeys());
// // console.log(user.removeValues());
// // console.log(user.removeKeys());

// // 2
// function countProps(obj) {
//     return Object.keys(obj).length;
// };
// console.log(countProps(user));

// 3
// function findBestEmployee(employees) {
//     let maxNum = 0;
//     for (const emple in employees) {
//         if (emple > employees) {
//             maxNum = emple;
//         };
//     };
//     return maxNum;
// };

// const workers = {
//     max: 200,
//     oleg: 450,
//     anny: 250000,
// }
// console.log(findBestEmployee(workers));
// 4
// function countTotalSalary(employees) {
//     let totalSalary = 0;
//     for (const emple in employees) {
//         totalSalary += employees[emple];
//     };
//     return totalSalary;
// };

// const obj = {
//     Oleg: 345,
//     bobr: 567,
//     anny: 345,
// };

// console.log(countTotalSalary(obj));

//5
// function getAllPropValues(arr, prop) {
//     const arrProp = [];
//     for (const obj of arrProp) {
//             arrProp.push(obj[prop]);
//     };
//     return arrProp;
// };

// const arr = [
//   {
//     name: "Oleg-bobr",
//   },
//   {
//     name: "Anny",
//   },
// ];

// const oobject = {
//     nema: "ughfg",
//     price: 345,
// }

// const mn = Object.keys(oobject);

// console.log(getAllPropValues(arr, mn));

//6

// const arrObj = [
//   {
//     price: 4545,
//     quantity: 4,
//   },
//   {
//     price: 445,
//     quantity: 4,
//   },
// ];


// function calculateTotalPrice(allProdcuts, productName) {
//     let multiplication;
//     for (const i of allProdcuts) {
//         const index = allProdcuts.indexOf(i);
//         const vals = Object.values(index);
//         multiplication = i * vals;
//     };  
//     return multiplication;
// };
// console.log(calculateTotalPrice(arrObj, "яблуко"));
