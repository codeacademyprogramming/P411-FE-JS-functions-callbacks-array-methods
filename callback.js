// const sum = (a, b) => a + b;

// const isEven = a => a % 2 === 0;

// console.log(sum(5, 10));
// console.log(sum(7, 13));
// console.log(isEven(5));
// console.log(isEven(10));

// function loop(numbers, cb) {
//     for (const number of numbers) {
//         cb(number)
//     }
// }

// // multiply part
// let result = 1;
// loop([1, 2, 3], (a) => {
//     result *= a;
// });


// let sum = 0;
// loop([1, 2, 3], a => {
//     sum += a;
// });




// function multiplyNumbersInArrayByTwo(numbers) {
//   const result = [];

//   for (const number of numbers) {
//     result.push(number * 2);
//   }
//   return result;
// }

// console.log(sumNumbersInArray([1, 2, 3, 4, 5, 5]));
// console.log(multiplyNumbersInArray([1, 2, 3, 4, 5, 5]));
// console.log(multiplyNumbersInArrayByTwo([1, 2, 3, 4, 5, 5]));

// function customMap(numbers, cb) {
//   const newArray = [];

//   for (const num of numbers) {
//     newArray.push(cb(num));
//   }

//   return newArray;
// }

// const addFive = (a) => a + 5;
// const multiplyByTwo = (a) => a * 2;
// console.log(loopThroughArrayAndDoSomething([1, 2, 3, 4, 5, 6, 7], addFive));

// console.log(loopThroughArrayAndDoSomething([1, 2, 3, 4, 5, 6, 7], multiplyByTwo));


// console.log(loopThroughArrayAndDoSomething([1, 2, 3, 4, 5], function (a) {
//   return a / 2;
// }));

// console.log(loopThroughArrayAndDoSomething([1, 2, 3, 4, 5], a => a / 2));

