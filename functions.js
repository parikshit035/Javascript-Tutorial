// writing a function

function greet() {
    console.log("HEY HELLO");
}
greet()

//parameters and arguments

function data(name){
    console.log(name);
}
data("parikshit")

// a return function 

function sum(a, b) {
    return a + b;
}
let total = sum(5, 10);

// fn expressions we can store fn in var but cant be hoisted

const greet1 = function () {
    console.log("Hello!");
};

greet1();

// arrow functions

const greet2 = () => {
    console.log("Hi!");
};

greet2();

// HO fn

function createMultiplier(x) {
    return function (y) {
    return x * y;
};
}
let double = createMultiplier(2);
console.log(double(5));

// closures it remeber the parent scope even after excecution

function outer() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
};
}
let counter = outer();
counter(); // 1
counter(); // 2

// iife

(function () {
console.log("Runs immediately");
})();

function greet(a, b  ) {
    return a + b;
}
console.log(sum(5, 10));