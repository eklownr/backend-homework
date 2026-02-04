const peopleAPI = "https://swapi.dev/api/people/";
const planetsAPI = "https://swapi.dev/api/planets/";

type People = (resident: URL | RequestInfo) => Promise<void>;
type Planets = (planet: number) => Promise<void>;

const people: People = async (resident) => {
	try {
		const response: Response = await fetch(resident);
		const data = await response.json();
		console.log("- ", data.name);
	} catch (error) {
		console.log(error);
	}
};

const planets: Planets = async (planet: number) => {
	try {
		const response = await fetch(planetsAPI + planet);
		const data = await response.json();
		const residents = data.residents;
		console.log("\n Planet Nr", planet, ":", data.name);

		for (const resident of residents) {
			await people(resident);
		}
	} catch (error) {
		console.log(error);
	}
};

const runSequens = async () => {
    for (let i = 1; i <= 20; i++) { 
        await planets(i); // Wait for all to finish
    }
};

runSequens();
