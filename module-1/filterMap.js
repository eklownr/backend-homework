// Tricky and Fun

const company = {
    name: "TechCorp",
    address: {
        city: "Malmö",
        country: "Sweden",
    },
};
console.log(company.address.country.toUpperCase());

//

const products = [
    { id: 1, name: "Mouse", price: 25 },
    { id: 2, name: "Keyboard", price: 75 },
    { id: 3, name: "Laptop", price: 1200 },
];
const names = products.filter((p) => p.price > 50).map((p) => p.name);
console.log(names);

//

const base = { role: "user", active: true };
const override = { role: "admin" };
const merged = { ...base, ...override };
console.log("base:", base, "override: ", override, "merged", merged);
console.log(merged.role);
