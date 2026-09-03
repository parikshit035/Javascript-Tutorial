// var, let, const - comparison const means value declared cant be change and let means we consider it
// declaritions and intialize

var a; // declare
var a = 12; // intialize

// global scope Value can be used in whole code eg: var a = 12;
// fn scoped can be used in fn 
// block scope can be used in blocks

// reassignment , redeclration

var b = 12;
b = 32;

var b;

let c = 12;  
c = 32;

// Temporal dead zone

let d = 12;


console.log(e); 

var e = 12;

// Hoisting var f = undefined; goes on line one before console.log(f

var f = 12;
