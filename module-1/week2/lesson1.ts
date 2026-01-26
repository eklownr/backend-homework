type PrintHelloFunc = (message: string) => void;

const hello = (s: string, saHello: PrintHelloFunc): void => {
    console.log("runnig callback in 2 seconds");
    
    //setTimeout(() => {
        sayHello(s);
    //},2000);
};

const sayHello = (message: string): void => {
    console.log(message);
};

hello("hello from callback", sayHello)



