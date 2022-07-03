// const numbers = [1, 2, 3, 4, 5];
// const users = [
//     {
//         firstname: "Aydan",
//         age: 18
//     },
//     {
//         firstname: "Nurkhan",
//         age: 20
//     },
//     {
//         firstname: "Tamilla",
//         age: 22,
//     },
//     {
//         firstname: "Zaur",
//         age: 26
//     },
//     {
//         firstname: "Shirvan",
//         age: 24
//     },
//     {
//         firstname: "Tofiq",
//         age: 17
//     }
// ];

// const filteredNumbers = numbers.filter(number => number % 2 === 0);

// const filteredUsers = users.filter(function (user) {
//     return user.age > 18;
// });

// ArrayLike
// const numbers = Array.from();

// numbers.forEach(function (number) {
//     console.log(number);
// });

// push, pop, shift, unshift - modifies original array
// const numbers = [1, 2, 3, 4, 5];
// const negativeNumbers = [-4, -3, -2, -1, 0];
// numbers.push(1, 2, 3, 4);
// console.log(numbers); // [1, 2, 3, 4, 5, 1, 2, 3, 4]
// numbers.pop();
// console.log(numbers); // [1, 2, 3, 4, 5, 1, 2, 3]
// numbers.shift();
// console.log(numbers); // [2, 3, 4, 5, 1, 2, 3]
// numbers.unshift(10, 11, 12, 13, 14, 15);
// console.log(numbers); // [10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 1, 2, 3]

// function doSomething(element, index, array) {
//   return element * 2;
// }

// const multipliedNumbers = numbers.map(doSomething);
// console.log(multipliedNumbers);
// console.log(numbers)

// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [11, 22, 33];
// const words = ["Hello,", "I", "<3", "You"];

// console.log(
//   numbers.some(function (number) {
//     return number % 2 === 0;
//   })
// );

// console.log(
//   numbers2.every(function (number) {
//     return number % 5 === 0;
//   })
// );; 


// function customSome(arr, cb) {
//     // 
// }

// customSome(numbers, function (number) {
//   return number % 2 === 0;
// }); // true - false

// const concatinaitedNumbers = numbers.concat(6, 7, 8, 9);
// const concatinaitedNumbers2 = numbers.concat([10, 11, 12, 13, 14]);
// console.log(concatinaitedNumbers);
// console.log(concatinaitedNumbers2);

// console.log(numbers.join("-"));
// console.log(words.join(" "));

// console.log(numbers.reverse());
// console.log(numbers);

// console.log(numbers.slice(1, 4));
// console.log(numbers);

// console.log(numbers.splice(1, 0, numbers2, "salam", {}, false));
// console.log(numbers);


// const users = [
//   { firstname: "Agil", age: 20 },
//   { firstname: "Agil", age: 20, birthdate: "Something" },
//   { firstname: "Agil", age: 20 },
//   { firstname: "Agil", age: 20 },
//   { firstname: "Nurkhan", age: 20 },
// ];

// console.log(numbers.includes(6));
// console.log(numbers.includes(5));

// console.log(users.indexOf({ firstname: "Agil", age: 20 }));

// const user = users.find(
//   (user) => user.age === 20 && user.firstname === "Agil"
// );
// const userIndex = users.findIndex(
//   (user) => user.age === 20 && user.firstname === "Agil"
// );
// console.log(user);
// console.log(userIndex);

function customConcat() {
    return [];
}

customConcat([1, 2, 3, 4], [1, 2, 3], [0, 1, 3]); // []
customConcat(1, 2, 3, 4, [1, 2, 3]); // []
customConcat([1, 2, 3], 11, 12, 13); // []
customConcat(11, 12, 13, 14); //


// reduce, reduceRight, sort