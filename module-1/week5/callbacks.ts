// type Callback = (data: string) => void
// 
// const deliverPackage = (dd: Callback): void => {
//     console.log("Waiting for package .... ");
//     setTimeout(() => {
//         const data: string = "Package delivered";
//         dd(data);
//     }, 2000);
// }
// 
// const displayData = (data: string) => {
//     console.log(data);
// }
// 
// deliverPackage(displayData);

/*
type PizzaType = (data: string) => void;

const orderPizza = (displayPizza: PizzaType) => {
    console.log("order pizza ....");
    setTimeout(() => {
        const data: string = "Pizza is ready to pickup!"
        displayPizza(data)
    }, 1000);   
}

const displayPizzaOrder = (data: string) => {
    console.log(data);   
    pickedUp()
    endMessage();
}

const pickedUp = (): void => {
    setTimeout(() => {
        console.log("Pizza is picked up by costumer")
    },1000);
}

function endMessage(): void {
    setTimeout(() => {
        console.log("By! Wellcome back!")
    },1000);
}

orderPizza(displayPizzaOrder)



type printResultFunk = (result: number) => void;

const calculate = (x: number, y: number, printResult: printResultFunk): void => {
    const result = x + y;
    printResult(result)
}
 const printResult = (result: number): void => {
    console.log("The result is: ", result);
    
}
calculate(2, 5, printResult);

*/


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