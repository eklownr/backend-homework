// flip a coin
const flipCoin = (): Promise<string> => {
	return new Promise((resolve, reject) => {
		let outcome = Math.random() > 0.5;
		outcome ? resolve("===> You winn!") : reject("===> You lose!");
	});
};

const coinFlipResult = async () => {
	try {
		const result = await flipCoin();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
};
//coinFlipResult();

//************************************** */
// Get chuck norris jokes API
//************************************** */
const getJoke = async () => {
	try {
		const response = await fetch("https://api.chucknorris.io/jokes/random");
		const data = await response.json();
		console.log(data.value);
		console.log("******************BOTTOM*****************");
	} catch (error) {
		console.error(error);
	}
};

//************************************** */
// Combinding flip coin and get API
//************************************** */
const combo = async () => {
	try {
		const flip = await flipCoin();
		console.log("*******************TOP*******************");
		console.log(flip);
		console.log("******************MIDLE******************");
		await getJoke();
	} catch (error) {
		console.log("Sorry no joke today ", error);
	}
};
combo();
