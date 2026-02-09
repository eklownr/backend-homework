// Task 1
const greet = (firstName: string) => {
	return "Hello " + firstName;
};

// Task 2
const double = (n: number) => {
	return n * 2;
};
console.log(double(5));

// Task 3
const isEven = (num: number) => {
	return num % 2 === 0;
};
console.log(isEven(3));
console.log(isEven(6));

// Task 4
const square = (x: number) => {
	return x * x;
};
const x = 5;
console.log(`The square of ${x} is ${square(x)}.`);

// Task 5
const getAge = (year: number) => {
	return 2026 - year;
};
console.log(`If you was born in 1967 you would be ${getAge(1967)} years old.`);

// Task 6
const prices = [10, 20, 30];
let total = 0;
prices.map((p) => {
	return (total += p);
});
console.log(`Total price: ${total}`);

total = 0;
prices.forEach((p) => {
	return (total += p);
});
console.log(`Total price: ${total}`);

// Task 7
const user = { name: "John" };
const sayHi = () => {
	return console.log("Hi " + user.name);
};

// Task 8
const colors = ["red", "blue"];
colors.forEach((c) => {
	return console.log(`Color: ${c}`);
});

// Task 9
const items = [1, 2, 3];
const doubled: number[] = items.map((i) => {
	return i * 2;
});
console.log(`${items} doubled: ${doubled}`);

// Task 10
const checkAuth = (user: { isAdmin: boolean }) => {
	return user.isAdmin;
};
console.log(checkAuth({ isAdmin: true }));

// Task 11
import fs from "fs";
const read = async (path: string): Promise<void> => {
	try {
		const data = await fs.promises.readFile(path, "utf-8");
		console.log(`Data from ${path}: ${data}`);
	} catch (error) {
		console.log(`Error reading file ${path}: ${(error as Error).message}`);
	}
};
read("./README.md");

// Task 12
const getData = async (url: string) => {
	try {
		let data = await fetch(url);
		data = await data.json();
		console.log(data);
	} catch (error) {
		console.log(
			`Error fetching data from ${url}: ${(error as Error).message}`,
		);
	}
};
getData("https://jsonplaceholder.typicode.com/posts/1");

// Task 13
const process = (data: number[]) => {
	return data
		.filter((x) => {
			return x > 10;
		})
		.map((x) => {
			return x * 2;
		});
};

console.log("****************");
console.log(process([10, 20, 30]));
console.log("****************");

// Task 14
const timer = (ms: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};
const test = async (time: number): Promise<void> => {
	console.log(`*****timeout ${time} sec**************`);
	await timer(time);
	console.log(`Done waiting for ${time} secund`);
};
const runSequens = async () => {
	for (let i = 1000; i <= 3000; i += 1000) {
		await test(i);
	}
};

runSequens();
