// if ([]) {
//   console.log("salam");
// } else {
//   console.log("saol");
// }

// console.log(typeof [] === typeof {});

// console.log({ firstname: "agil" } == { firstname: "agil" });
// console.log([1, 2] == [1, 2]);

// console.log({} === {});
// console.log([] === []);

// const user = {};

// user.firstname = "John";

// console.log(user, user2, "first \n");

// const user2 = user;

// console.log(user, user2, "second");

// var, const, let

// let variable = "";
// console.log(variable);
// console.log(variable);

// if (typeof undefined) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// console.log(typeof typeof undefined);

// if (typeof {}) {
//   console.log("true");
// }

// DRY - don't repeat yourself

// const number = 5;
// const isEven = number % 2 === 0;

// console.log(isEven);

// const number2 = 5;
// const isEven2 = number % 2 === 0;

// console.log(isEven2);

// function declaration

// const result1 = isEven(5);

// console.log(result1);

// function isEven(num) {
//   if (typeof num !== "undefined") {
//     return num % 2 === 0;
//   } else {
//     throw new Error("please provide a value");
//   }
// }

// // const result = isEven();
// // console.log(result);

// const isEven = function () {}; // regular function expression
// const isEven2 = () => {}; // arrow function

// console.log(isEven());

// const a = 5;

// function thisKeywordWithDeclaration() {
//   console.log(a);
//   console.log(this);
// }

// const thisKeywordWithExpression = () => {
//   console.log(this);
// };

// thisKeywordWithDeclaration();
// thisKeywordWithExpression();

// let, const - block scoped
// var - function scoped

// function increment() {
//   var num1 = 5;
//   var num = num + 1;
//   return num;
// }

// console.log(increment(0));
// console.log(increment(0));
// console.log(increment(0));
// console.log(increment(0));
// console.log(increment(0));

// {
//   var withVar = 10;
//   let withLet = 20;
// }

// console.log(withVar);
// console.log(withLet);

// const user = {
//   firstname: "Aydan",
//   lastname: "Nuriyeva",
//   age: 13,
//   sayMyName: () => {
//     console.log(this);
//     console.log("Hey there, this is my name", this.firstname);
//   },
// };

// user.sayMyName.bind(user);

// user.sayMyName();

// const user2 = {
//   firstname: "Nurkhan",
//   lastname: "Mesimzade",
//   age: 20,
//   sayMyName: function () {
//     console.log(this);
//     console.log("Hey there, this is my name", this.firstname);
//   },
// };

// user.sayMyName();
// user2.sayMyName();

// function addNumbers(...numbers) {
//   // 1. arguments
//   // 2. rest parameters

//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }

//   return sum;
// }

// console.log(addNumbers(3, 6, 7, 15));
// console.log(addNumbers(10, 15, 25, 30));

const findMax = () => {
  //
};

function findMax2() {
  //
}

findMax(3, 5, 10, 20, 32, 1, 0, -10); //32
findMa2(3, 5, 10, 20, 32, 1, 0, -10); //32
