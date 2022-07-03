// const numbers = [1, 2, 3, 4, 5];
// const negativeNumbers = [-4, -3, -2, -1, 0];

// const pushedNumbers = [-6, -5, ...negativeNumbers, ...numbers, 6, 7, 8];

// console.log(pushedNumbers);
// console.log(numbers);

const user = {
  firstname: "John",
  lastname: "Lennon",
  age: 65,
};

const userAbilities = {
  leadership: true,
  canPlayMusic: true,
  songs: ["Song1", "Song2", "Song3"],
};

const updatedUser = {
  ...user,
  abilites: {
    ...userAbilities
  },
};

console.log(updatedUser);
userAbilities.leadership = false;
// console.log(updatedUser);
