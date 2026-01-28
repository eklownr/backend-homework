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

// Exersice 2

// Exersice 3


/**********************************  
Enum
**********************************/
// Exersice 1

// Exersice 2

// Exersice 3


/**********************************  
Generics
**********************************/
// Exersice 1

// Exersice 2

// Exersice 3
