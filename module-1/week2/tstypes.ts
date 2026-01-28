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


/* ****************  
Union type
*************** */
// Exersice 1

// Exersice 2

// Exersice 3

// Exersice 4


/* ****************  
Interfaces and Type Aliases
*************** */
// Exersice 1

// Exersice 2

// Exersice 3

// Exersice 4


/* ****************  
Enum
*************** */
// Exersice 1

// Exersice 2

// Exersice 3

// Exersice 4


/* ****************  
Generics
*************** */
// Exersice 1

// Exersice 2

// Exersice 3

// Exersice 4