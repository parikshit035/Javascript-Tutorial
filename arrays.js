// let arr = [1,2,3,4,5];
// arr.push(6);
// arr.pop();
// arr.shift();
// arr.unshift(0);
// arr.reverse();

// let sort = arr.sort(function(a, b) {
//     return a -b;
// });

// console.log(arr);
// console.log(sort);

let arr = [22,45,6,23,56];

// arr.forEach(function (val) {
//     console.log(val + 5);
// });

// let newarr = arr.map(function(val) {
//     if (val > 10) {return val;}
// });

// console.log(newarr);

let newarr = arr.filter(function(val){
    if (val>10) {
        return true;
    }
});

console.log(newarr);

