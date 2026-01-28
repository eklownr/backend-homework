type passwordType = number | string;

const pass = (code: passwordType) => {
  console.log("password: ", code);
}
pass("1234");
pass(67890);

interface Person {
    firstName: string,
    age?: number,
}

interface Customer {
    id: number,
    mail: string,
}

type Client = Person & Customer;

const clientData = (client: Client) => {
    console.log("Client", client);
}


const myData = ({
    firstName:  "Nils",
    id:         1,
    mail:       "df@df.se",
});

clientData(myData);

/*
// enum
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


// declaring enum as const
const TrafficLight = {
    RED: 'red',
    YELLOW: 'yellow',
    GREEN: 'green',
} as const;

type TrafficLight = (typeof TrafficLight)[keyof typeof TrafficLight];

const signal = (color: TrafficLight) => {
    console.log(`Traffic light is ${color}`);
        checkLight(color);
}

signal(TrafficLight.RED);    
signal(TrafficLight.YELLOW);
signal(TrafficLight.GREEN); 
 

// add function after enum end arrow function call to se if it works
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

