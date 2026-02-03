import { log } from "node:console";

 // flip a coin
 const flipCoin = (): Promise<string> => {
     return new Promise((resolve, reject) => {
         let result = Math.random();
         // console.log(result); // TEST
         if (result > 0.5) {
             resolve("===> You winn!");
         } else {
             reject("===> You lose!");
         }
     });
 };
 
// // using .then, .catch
// flipCoin()
//     .then((flipping) => {
//         console.log(flipping);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
//


//************************************** */
// Combinding flip coin and get API
//************************************** */
const getJoke = () => {
	fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => console.log(data.value))
	.then(() => console.log("******************BOTTOM*****************"))
};


const combo = () => {
    flipCoin()
        .then((flip) => {
			console.log("*******************TOP*******************");
            console.log(flip);
			console.log("******************MIDLE******************");
			getJoke();
        })
        .catch((error) => {
            console.error("Sorry no joke today ",error);
        });
};
combo();

//************************************** */


// // create Promise that resolved after 1 second
// const fetchData = (): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         const success = true;
//         setTimeout(() => {
//             if (success) {
//                 resolve("Data fetched after 1 sec");
//             } else {
//                 reject(new Error("Error no data was fetched"));
//             }
//         }, 1000);
//     });
// };
// 
// // Use Promise with .then() och .catch()
// fetchData()
//     .then((result) => {
//         console.log(result); // "Data fetched after 1 sec"
//     })
//     .catch((error) => {
//         console.error(error.message);
//     });
// 
// // Eller använd async/await
// const getFetchData = async () => {
//     try {
//         const data = await fetchData();
//         console.log("async await getFetchData: ", data); // "async await ... Data fetched after 1 sec"
//     } catch (error) {
//         console.error(error.message);
//     }
// };
// 
// fetchData();
// getFetchData();
// 
// const myPromise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve("Data fetched successfully");
//     } else {
//         reject(new Error("Failed to fetch data"));
//     }
// });
// 
// // runs before fetchData() no setTimeOut here
// myPromise
//     .then((result) => {
//         console.log(result); // Output: Data fetched successfully
//     })
//     .catch((error) => {
//         console.error(error.message);
//     });
// 
// //************************************** */
// // Fetch data from an API
// //************************************** */
// const fetchById = (id: number) => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then((response) => response.json())
//         .then((data) => console.log(data));
// };
// 
// fetchById(3);
// 
// 
// 
// // TEST with counter
// 
// let couter = 0;
// // Promise med async/await
// async function getData() {
//     couter++;
//     return "hej " + couter;
// }
// 
// // get value from promise
// getData().then((value) => {
//     console.log(value); // Output: hej 1
// });
// 
// // Eller med await (inuti en async-funktion)
// const test = async () => {
//     const result = await getData();
//     console.log(result); // Output: hej 2
// };
// test();
// 
// const test2 = async () => {
//     try {
//         const result = await getData();
//         console.log(result); // Output: hej 3
//     } catch (error) {
//         console.error(error);
//     }
// };
// test2();
// 