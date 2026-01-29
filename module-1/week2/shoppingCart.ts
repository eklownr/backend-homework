// Step 1: Turn this into an enum)
const Categories = {
    ELECTRONICS: 'Electronics',
    GROCERIES: 'Groceries',
    CLOTHING: 'Clothing',
}as const;

// Declaring type from 'read only object' as enum and using keys: ELECTRONICS, GROCERIES, CLOTHING
type Categories = (typeof Categories)[keyof typeof Categories];

interface Product {
    id: number;
    name: string;
    price: number;
    category: Categories;
}

// Step 2: Create a list of products 
const products: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99, category: Categories.ELECTRONICS },
    { id: 2, name: 'T-Shirt', price: 19.99, category: Categories.CLOTHING },
    { id: 3, name: 'Bananas', price: 1.99, category: Categories.GROCERIES }
];

// Step 3: Create a empty shopping cart
let shoppingCart: Product[] = [];

// Step 4: Function to add a product to the cart
const addToCart = (product: Product): void => {
    shoppingCart.push(product);
    console.log(`${product.name} has been added to your cart.`);
};

// Step 5: Function to calculate the total price of the cart (using arrow function)
const calculateTotal = (cart: Product[]): string => {
    let total = 0;
    cart.forEach((item) => total += item.price);
    return total.toFixed(2);
};

// Step 6: Function to display the cart contents (using arrow function)
const displayCart = (cart: Product[]): void => {
    if (cart.length === 0) {
        console.log('Your cart is empty.');
        return;
    }
    // if cart is not empty, print all items
    console.log('Your cart contains:');
    cart.forEach((item) => {
        console.log(`- ${item.name} (${item.category}): $${item.price}`);
    });
    // last print out total cost
    console.log(`Total: $${calculateTotal(cart)}`);
};

// Step 7: Simulate adding products to the cart and displaying it
addToCart(products[0]); // Adding Laptop
addToCart(products[2]); // Adding Bananas
displayCart(shoppingCart);

console.log("*** Add some more product to the cart ***");

addToCart(products[1]); // Adding T-Shirt
displayCart(shoppingCart);