const numbers = [1, 2, 3, 4, 5];
// const firstIndexNumber = numbers[0];
// const secondIndexNumber = numbers[1];

// const [firstIndexNumber, secondIndexNumber] = [1, 2, 3, 4, 5];
const [firstIndexNumber, secondIndexNumber, ...rest] = numbers;
 

console.log(firstIndexNumber, secondIndexNumber, rest, numbers);