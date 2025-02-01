// Task 1: Product Price Management
let prices = [25, 50, 75, 100, 150];
prices.push(200);
prices.shift();

console.log("New Prices:" ,prices); 
// Declares prices to the array, added 200 to the end of the array, and removed the first price from the array. Then, prints the code in the console.

// Task 2: Modifying Customer Orders
let orders = [25, 300, 125, 175, 100]
orders[2] += 5;
let ordersTotal = orders.reduce((total, orders) => total + orders, 0);

console.log("Total Orders: ", ordersTotal);
// Declares orders to the array, added 5 to the 3rd number in the array, calculated the total orders, then had the console print the new order information.

// Task 3: Employee Performance Tracking
let employee = {
    name: "Josh",
    role: "Circus Clown",
    performanceScore: 8.5,
    isActive: true
};

employee.performanceScore += 0.5;
employee.promotionEligible = true;

console.log("New Employee Info: ", employee);
// Declares employee to an object, added 0.5 to the performance score, added the employee eligibility for promotion, Then the console prints the new employee information.

// Task 4: Customer Feedback Records
let reviews = [
    {customerName: "Kim Kardashian" ,rating: 4.6, feedbackText: "This show was so boring I almost fell asleep. I only came to be seen in public with my family."},
    {customerName: "Kanye West" ,rating: 8.9, feedbackText: "I loved the show! Especially since I got to spend time with North. Her mother on the other hand...."},
    {customerName: "North West" ,rating: 9.4, feedbackText: "I thought the show was hilarious! My dad and I had a great time together! My mom didnt seem to enjoy it as much but she doesnt enjoy anything so it makes sense."},
];

reviews.push({customerName: "Kendall Jenner" ,rating: 5, feedbackText: "The show was mid imo. I only came along because there was an extra ticket."});

console.log("New Reviews: ", reviews);
// Declares reviews to the array of customers, added the customers and their reviews, added an additional new customer and their review, then had the console print everything.

// Task 5: Inventory Management Systems

let inventory = {
    itemName: "Worn Clown Nose",
    stockCount: 10,
    price: 25000,
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
};

console.log(inventory);
console.log("Total Value:", inventory.calculateTotalValue());
// Declares inventory to an object, assigns values to the amount of stock and price of the product, then calculates the total value and prints it all to the console.