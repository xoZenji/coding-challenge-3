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