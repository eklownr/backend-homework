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

lightAction(RED);




