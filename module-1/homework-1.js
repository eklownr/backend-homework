/* Homework lesson 1 */
// Set up variables
const firstName = "Nils";
const favoriteNumber = 7;
const likesCoding = true;
const date = new Date();
const age = date.getFullYear() - 1967; 

console.log(`Hi, my name is ${firstName},
    my favorite number is ${favoriteNumber},
    and it is ${likesCoding} that I like coding.
    I am ${age} years old in april ${date.getFullYear()}.
    `);  

// make a array of 3 foods
const foods = ["pasta", "sushi", "tacos"];

// make an objekt called "student"
const student = {
  name: "Anna",
  favouriteNumber: 13,
  likesCoding: false,
  foods: foods
};

// print out the object student
console.log(student);

// print out one of the propeties, t.ex. namn
console.log(student.name);   