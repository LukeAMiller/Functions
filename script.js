// 1. Write a function called `addToCart` that takes one argument of `itemName`
// 2. The function should log the sentence "The [itemName] has been added to your cart!" to the console.
// 3. Call the function three times and pass in three different items that you might buy at a grocery store
// function addToCart(itemName){
//     var sentence = `The ${itemName} have been added to your cart!`
// console.log(sentence)};
// addToCart("Bananas");
// addToCart("Avacados");
// addToCart("OstridgeEggs");
// var groceries = ["peaches", "onions", "tomatoes", "pizzaDough"]
// for(var i =0;i<groceries.length;i++){
//     addToCart(groceries[i])
// };
// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if(currentNumber % 35 === 0){console.log("Liger-Man-Bear-Pig")}
//     else if (currentNumber % 70=== 0){console.log("Liger-Man-Bear-Pig")}
//     else if (currentNumber % 5 === 0) {
//         console.log("Man-bear-Pig") // Only 2, 4, 6 will appear
//     } else if (currentNumber % 7 === 0){
//         console.log("Liger")
//     }
//     else if (currentNumber % 1 === 0){
//         console.log(currentNumber)
//     };
// };
// let bandNumber = 1

// const takeNumber = function (takeNumber) {
//     var bandName = (bandNumber++ + ". " + takeNumber)
//     return bandName
//     /*
//         Write your awesome code here. See comments
//         below for what should be returned.
//     */
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console
// const hamburger = {
// 	name: 'Hamburger',
// 	type: 'beef',
// 	cooked: false,
// }
// const zucchini = {
// 	name: 'Zucchini',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const chickenBreast = {
// 	name: 'Chicken Breast',
// 	type: 'chicken',
// 	cooked: false,
// }
// const corn = {
// 	name: 'Corn',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const steak = {
// 	name: 'Steak',
// 	type: 'beef',
// 	cooked: false,
// }

// // // An array that is grouping the objects together.
// // const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// // // An empty array that will store the objects after the `grill()` function cooks the food.
// // const cookedFood = [];
// // function grill (currentObject) {
// //     // Modify the food so that it is cooked
// //     currentObject.cooked = true;

// //     // Put the cooked food into the appropriate array
// //     cookedFood.push(currentObject);
// // };
// // console.log(cookedFood);
// // for (var i=0;i<foods.length;i++){grill(foods[i])};
// S
// 1. Build an object that represent an employee at the taco shop.
const chickenTaco={
    price: 1.00,
    engredients: ["chicken", "lettuce", "tomatoes", "hot sauce", "avacado", "peppers"],
}
const employee1={
    name: "Oscar the Grouch",
    startDate: "8/14/2019",
    jobTitle: "Trash disposal and chef",
    payRate: 13.00,
    favoriteTaco: "trashTaco",
    menu:[chickenTaco, "steakTaco", "veggieTaco", "trashTaco", "holyTaco"],
    makeTaco:function (tacoName){
        for(var i = 0; i< this.menu.length;i++){
            if(tacoName === this.menu[i]){
                console.log(`Here's your ${tacoName}`)
            }
        }
       
    }
};
const employee2={
    name: "Birdman",
    startDate: "8/14/2019",
    jobTitle: "Manager",
    payRate: 15.00,
    favoriteTaco: chickenTaco,
    menu:[chickenTaco, "steakTaco", "veggieTaco", "trashTaco", "holyTaco"],
    makeTaco:function (tacoName){
        for(var i = 0; i< this.menu.length;i++){
            if(tacoName === this.menu[i]){
                console.log(`Here's your ${tacoName}`)
            }
        }
       
    }
};


// 2. The employee object should have the following properties:
// - a name
// - a startDate
// - a jobTitle
// - a payRate
// - a favoriteTaco
// - an array of menu items they know how to make
// const tacoShopStaff={
//     employees:[employee1],
//     hireEmployee:function(newemployee){
//         this.employees.push(newemployee) 
//     },
//     fireEveryone: function(employees)
//     {this.employees = []}
    
    
// }
// ;

// tacoShopStaff.fireEveryone(employee1);
// console.log(tacoShopStaff);


// const expense = {
//     dateCreated: "01/01/2017",
//     location: "Bob's Burgers",
//     dollarAmount: "14.34",
//     purpose: "Lunch with very important client",
//     code: "1001A"
// };
// const employee = {
//     firstName: "Michael",
//     lastName: "Tambornino",
//     role: "Sales Rep",
//     accountNumber: "1-8349058340"
// };
// const expenseReport = {
//     dateCreated: "02/01/2017",
//     expenses: [
//         {
//             amount: 14.34,
//             dateCreated: "01/01/2017",
//             vendor: "Bob's Burgers",
//             code: "1001A"
//         },
//         {
//             amount: 51.03,
//             dateCreated: "01/03/2017",
//             vendor: "Sunoco",
//             code: "2213D"
//         },
//         {
//             amount: 7.22,
//             dateCreated: "01/07/2017",
//             vendor: "Taco Bell",
//             code: "1001A"
//         }
//     ]
// }
// const employee = {
//     firstName: "Michael",
//     lastName: "Tambornino",
//     role: "Sales Rep",
//     accountNumber: "1-8349058340"
// };employee.role = "Sales Manager"
// Name property with a string value.
const pet={
    Name: "Lucy",
    Species: "Feline",
    Nicknames: ["Luna", "Miss Kitty", "Fat Cat"],
    age: 3,
    favoriteToys:[],
    meow:function(){
        console.log("meow")
    },
    purr:function(){
        console.log("purr purr")
    },
    pounce:function(object){
        console.log(`Pounces on ${object}`)
    },
    play:function(toy){
        if (toy.includes("small")){this.favoriteToys.push(toy)}else(toy.includes("small"))
    }
};
pet.purr();
pet.meow();
pet.pounce("mouse");
pet.play("small ball of string");
console.log(pet);
// Species property with a string value.

// Nicknames property with an array value. Array contains strings.

// Age property with an integer value
// Give your pet a new key named favoriteToys whose value is an empty array.
// Now define another new key named play whose value is a function with a single parameter named toy.
// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).
// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    orders: [],
    getOrders: function(){
        console.log(this.orders)
    }
}

const chickenComboMeal = {
    sandwichType: "flatbread",
    fries:true,
    drinkSize: "medium",

}

// Place an order
restaurant.placeOrder(chickenComboMeal);
console.log(restaurant);
// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()