function myFunc(num) {
    num = 10;
    console.log(num);
}

const number = 5;
myFunc(number);
console.log(number)


function myFunc2(u) {
    u.age = 10;
    console.log(u);
}

const user = {
    firstname: "John"
};
myFunc2(user);
console.log(user);