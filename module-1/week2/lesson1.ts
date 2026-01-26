/*

// 1-2 hello
type PrintHelloFunc = (message: string) => void;

const hello = (s: string, saHello: PrintHelloFunc): void => {
    console.log("runnig callback in 2 seconds");
    
    setTimeout(() => {
        sayHello(s);
    },2000);
};

const sayHello = (message: string): void => {
    console.log(message);
};

hello("hello I am late", sayHello)


// 3 Math callback
type printResultFunc = (result: number) => void;

const calculate = (x: number, y: number, printResult: printResultFunc): void => {
    const result = x + y;
    printResult(result)
}

 const printResult = (result: number): void => {
    console.log("The result is: ", result);
    
}
calculate(2, 5, printResult);


// 4 Uppercase callback
type PrintUppercaseFunc = (message: string) => void;

const uppercase = (s: string, printUppercase: PrintUppercaseFunc) => {
    printUppercase(s);
};

const printUppercase = (message: string) => {
    console.log(message.toUpperCase());
};

uppercase("testing uppercase callback!", printUppercase)


// 5 Pizza order
type PizzaType = (data: string) => void;

const orderPizza = (displayPizza: PizzaType) => {
    console.log("order pizza ....");
    setTimeout(() => {
        const data: string = "Pizza is ready to pickup!"
        displayPizza(data)
    }, 3000);   
}

const displayPizzaOrder = (data: string) => {
    console.log(data);   
    endMessage();
}

function endMessage(): void {
    setTimeout(() => {
        console.log("By! Wellcome back!")
    },2000);
}

orderPizza(displayPizzaOrder)


// 6 Multiple messages
type MultiMessageFunc = (msg: string) => void;

const threeMessages = (multi: MultiMessageFunc) => {
    multi("first message");
    multi("second message");
    multi("third message");
};

const multiMessages = (msg: string) => {
    console.log(msg);    
};

threeMessages(multiMessages); // use multi callback three times


console.log("********************");


// 6 Multiple messages with timeout
function callThreeTimes(callback: (message: string) => void, count = 0) {
  const messages = [
    "Första meddelandet!",
    "Andra meddelandet!",
    "Tredje meddelandet!",
  ];

  if (count < messages.length) {
    callback(messages[count]);
    setTimeout(() => callThreeTimes(callback, count + 1), 1000);
  }
}

callThreeTimes((msg) => {
  console.log(msg);
});   


// 7 Download file
type ShowFileFunc = (fileContent: string) => void;

const downloadFile = (url: string, showFile: ShowFileFunc): void => {
    console.log("Starting to download file: ", url);
    setTimeout(() => {
        const fileContent: string = `file data from ${url}`
        showFile(fileContent);
    },2000);  
};

const showFile = (fileContent: string): void => {
    console.log(fileContent);
};

downloadFile("http://example.com/file.txt", showFile)



// 8) Success and Error Callback 
type SuccessFunc = () => void;
type ErrorFunc = () => void;
const twoCallbacks = (success: SuccessFunc, error: ErrorFunc) => {
    const result = Math.random() > 0.5;   
    console.log("It is ", result, " that it is a seccess");

    if (result) {
        success();
    } else {
        error();
    }
};

const success = () => {
    console.log("Success!");
};

const error = () => {
    console.log("Error!");
};

twoCallbacks(success, error);

*/


// 9) 