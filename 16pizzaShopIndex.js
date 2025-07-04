const PizzaShop = require("./15pizzashop.js")

const pizzaShop = new PizzaShop();

pizzaShop.on('order', (size, topping) =>{
    console.log(`You ordered ${size}, with topping ${topping}`);
});

pizzaShop.order("large", "mushroom"); // Order count = 1;
// pizzaShop.order(); // Order count = 2;
pizzaShop.displayOrderNumber();

// pizzaShop.on('order', (size, topping) =>{
//     console.log(`Count - ${count}, you ordered ${size}, with topping ${topping}`);
// });