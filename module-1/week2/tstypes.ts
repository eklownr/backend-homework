// union type
type passwordType = number | string;

const pass = (code: passwordType) => {
    console.log("password: ", code);
}
pass("1234");
pass(67890);


// interface
interface Person {
    firstName: string,
    age?: number, // optional
}

interface Customer {
    id: number,
    mail: string,
}

// intersection combine multiple types into one using the & operator
type Client = Person & Customer;

const clientData = (client: Client) => {
    console.log("Client", client);
}


const myData = ({
    firstName:  "Nils",
    // skipping optional age
    id:         1,
    mail:       "df@df.se",
});

clientData(myData);


/**********************************  
Union types
**********************************/
// Exersice 1
// Create a type called IDType that can be either a number OR a string. 
// Write a function showID that prints "Your ID is: ...". 
// Call the function with both a number and a string. 
type IDType = number | string;
const showID = (id: IDType) => {
    console.log("Your ID is: ", id);
}
showID(123456);
showID("123456");

// Exersice 2
// Make a type Fruit that can be "apple" OR "banana" OR "orange". 
// Write a function eatFruit that prints "You ate an ...". 
// Test with "apple" and "orange". 
type Fruit = "apple" | "banana" | "orange";
const eatFruit = (f: Fruit) => {
  console.log("You eat an", f);
};
eatFruit("apple");
eatFruit("orange");

// Exersice 3
// Create a type Result that can be either true OR false. 
// Write a function printResult that prints "Pass" if true, and "Fail" if false. 
// Test with both values.
type Result = true | false;
const printResult = (testReult: boolean) => {
  if (testReult) { console.log("Pass"); }
  else {console.log("Fail");
  }
};
printResult(true);
printResult(false);


/**********************************  
Interfaces and Type Aliases
**********************************/
// Exersice 1
// Create an interface Book with properties title (string) and pages (number). 
// Write a function describeBook that prints: 
// "The book [title] has [pages] pages." 
interface Book {
  title: string;
  pages: number;
}

const describeBook = (book: Book) => {
  console.log(`The book ${book.title} has ${book.pages} pages.`);
};

const book: Book = {
  title: "Pelle svanslös",
  pages: 350,
}

describeBook(book)

// Exersice 2
// Create two interfaces: 
// Teacher with name and subject 
// Employee with id and email 
// Make a type SchoolTeacher that is both Teacher AND Employee. 
// Write a function printTeacherInfo to show their data. 
interface Teacher {
  name: string;
  subject: string;
};
interface Employee {
  id: number;
  email: string;
};
type SchoolTeacher = Teacher & Employee;
function printTeacherInfo(TE: SchoolTeacher) {
  console.table(TE);
};
const teacher: SchoolTeacher =  {
  name: "Kalle",
  subject: "Art",
  id: 1,
  email: "kalle@plugget.se"
};
printTeacherInfo(teacher);

// Exersice 3
// Make an interface Car with brand and year. 
// Write a function printCar that prints "Brand: ... Year: ...". 
// Call the function with your favorite car. 
interface Car {
  brand: string;
  year: number;
}
const car: Car = {
  brand: "Volkswagen Typ 1",
  year: 1938
}
const printCar = (car: Car) => {
  console.log("Brand: ", car.brand, " Year: ", car.year);
}
printCar(car)



/**********************************  
Enum
**********************************/
// Exersice 1

/*
// enum do not work without "node --loader ts-node/esm"
// Error: TypeScript enum is not supported in strip-only mode
enum Traficlight {
    RED = "RED",
    YELLOW = "YELLOW",
    GREEN = "GREEN",
}

const lightAction = (light: Traficlight) => {
    if (light === Traficlight.RED) {
      console.log("Stop RED");
  }
    if (light === Traficlight.YELLOW) {
      console.log("Stop YELLOW");
  }
    if (light === Traficlight.GREEN) {
      console.log("Go GREEN");
  }
}

lightAction(Traficlight.RED);

*/


// declaring enum as const object. Works with node
const TrafficLight = {
    RED: 'red',
    YELLOW: 'yellow',
    GREEN: 'green',
} as const;

// declaring type from enum and using keys: RED, YELLOW, GREEN 
type TrafficLight = (typeof TrafficLight)[keyof typeof TrafficLight];

const signal = (color: TrafficLight) => {
    console.log(`Traffic light is ${color}`);
        checkLight(color);
}

signal(TrafficLight.RED);    
signal(TrafficLight.YELLOW);
signal(TrafficLight.GREEN); 
 

// add function after enum and arrow-function-call to se if it works
function checkLight(color: TrafficLight) {
    if (color === TrafficLight.RED) {
        console.log("Stop RED");
    }
    if (color === TrafficLight.YELLOW) {
        console.log("Wait YELLOW ... ");
    }
    if (color === TrafficLight.GREEN) {
        console.log("Go GREEN");
    } 
 }



// Exersice 2
// Create an enum PizzaSize with values: Small, Medium, Large. 
// Write a function orderPizza that prints: 
// "You ordered a [size] pizza." 
const PizzaSize = {
    SMALL: "Small",
    MEDIUM: "Medium",
    LARGE: "Large",
} as const;

// declaring type from enum and using keys: SMALL, MEDIUM, LARGE
type PizzaSize = (typeof PizzaSize)[keyof typeof PizzaSize];

const orderPizza = (size: PizzaSize) => {
    console.log(`You ordered a ${size} pizza.`);
}

orderPizza(PizzaSize.SMALL);
orderPizza(PizzaSize.MEDIUM);
orderPizza(PizzaSize.LARGE);

// Exersice 3
// Create an enum Role with values: Admin, User, Guest. 
// Write a function printRole that checks the role: 
// Admin → "You have full access" 
// User → "You have limited access" 
// Guest → "You have guest access" 
const Role = {
    ADMIN: "Admin",
    USER: "User",
    GUEST: "Guest",
} as const;

type Role = (typeof Role)[keyof typeof Role];

const printRoll = (roll: Role) => {
  if (roll === Role.ADMIN) {
    console.log(roll, "You have full access");
  }
  if (roll === Role.USER) {
    console.log(roll, "You have limited access");
  }
  if (roll === Role.GUEST) {
    console.log(roll, "You have guest access");
  }
}

printRoll(Role.ADMIN)
printRoll(Role.GUEST)
printRoll(Role.USER)


/**********************************  
Generics
**********************************/
// Exersice 1
// Write a generic function wrapInArray<T> that takes one item 
// and returns it inside an array. 
// Example: wrapInArray("cat") → ["cat"] 
const wrapInArray = <T>(item: T): T[] => {
  return [item];
}
const numberArray = wrapInArray(42);        // number[]
const stringArray = wrapInArray("hello");   // string[]  
console.log(wrapInArray("cat")); // returns ["cat"] and print it out
console.log(numberArray); 


// Exersice 2
// Write a generic function firstItem<T> that takes an array 
// and returns the first item. 
// Test with [1, 2, 3] and ["a", "b", "c"]. 
const firstItem = <T>(item: T[]): T => {
  return item[0];
}
console.log("first in [1,2,3]: ", firstItem([1,2,3]));
console.log("first in [a,b,c]: ", firstItem(["a","b","c"]));



// Exersice 3
// Write a generic function swap<T> that takes two items 
// and returns them in reverse order inside an array. 
// Example: swap("hello", "world") → ["world", "hello"] 
const swap = <T>(a: T, b: T): T[] => {
  return [b,a];
}

console.log("swap world, hello", swap("world", "hello"));

