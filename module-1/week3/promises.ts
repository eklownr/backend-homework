// Skapa en Promise som löser efter 1 sekund
const fetchData = (): Promise<string> => {
	return new Promise((resolve, reject) => {
		const success = true;
		if (success) {
			resolve("Data hämtad!");
		} else {
			reject(new Error("Misslyckades hämta data"));
		}
	});
};

// Använd Promise med .then() och .catch()
fetchData()
	.then((result) => {
		console.log(result); // Output: Data hämtad!
	})
	.catch((error) => {
		console.error(error.message);
	});

// // Eller använd async/await
// const getData = async () => {
// 	try {
// 		const data = await fetchData();
// 		console.log(data); // Output: Data hämtad!
// 	} catch (error) {
// 		console.error(error.message);
// 	}
// };

fetchData();
//getData();

const myPromise = new Promise((resolve, reject) => {
	const success = true;
	if (success) {
		resolve("Data fetched successfully");
	} else {
		reject(new Error("Failed to fetch data"));
	}
});

myPromise
	.then((result) => {
		console.log(result); // Output: Data fetched successfully
	})
	.catch((error) => {
		console.error(error.message);
	});

// Fetch data from an API
const fetchById = (id: number) => {
	fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then((response) => response.json())
		.then((data) => console.log(data));
};

fetchById(3);

let couter = 0;
// Promise med async/await
async function getData() {
	couter++;
	return "hej " + couter;
}

// get value from promise
getData().then((value) => {
  console.log(value); // Output: hej 1
});

// Eller med await (inuti en async-funktion)
const test = async () => {
	const result = await getData();
	console.log(result); // Output: hej 2
};
test();

const test2 = async () => {
	try {
		const result = await getData();
		console.log(result); // Output: hej 3
	} catch (error) {
		console.error(error);
	}
};
test2();
