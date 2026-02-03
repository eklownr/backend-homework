interface LukeSkywalker {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
    homeworld: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
		const data = await fetch("https://swapi.py4e.com/api/people/1").then(
			(res) => {
				return res.json();
			},
		);
		return data as LukeSkywalker;
};

export const planetLukeSkywalker = async () => {
	const data = await fetch("https://swapi.py4e.com/api/planets/1").then(
		(res) => {
			return res.json();
		},
	);
	return data;
};

const lukeSkywalker = fetchLukeSkywalker();
lukeSkywalker.then((data) => console.log("Star wars character ", data.name, ", homeworld API: ", data.homeworld));

const planet = planetLukeSkywalker();
planet.then((data) => console.log("How lives on planet ", data.name, "?"));
