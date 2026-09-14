// Create an object for a book (title, author, price)

// let book = {
//     title: "harry potter",
//     author: "JK",
//     price:100,
// };

// // Access properties using both dot and bracket

// console.log(book.title);
// console.log(book["author"]);

// Write a nested object (user with address and location)

// let History = {
//     title: "harry potter",
//     author: "JK",
//     price:100,
//     address: {
//         location : USA
//     }
// };

// Destructure name and age from a student object

let student = {
    Name: "harry potter",
    age: 20,
    address: {
        location : "india"
    }
};

let {Name , age} = student;

console.log(Name);
console.log(age);

// Loop through keys and values of an object

// for (let key in student) {
// console.log(Name);
// }

for (let key in student) {
console.log(key, student[key]);
}



