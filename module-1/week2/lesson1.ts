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

*/

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
