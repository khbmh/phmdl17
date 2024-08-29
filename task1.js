/*

Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.

Sample Input:
1000
700

Sample Output:
300

*/

var moneyIHave = 1200;

// price per kilogram for each fruit
var applePerKg = 160;
var orangePerKg = 250;

// if bought 2kg of apples and 3kg of oranges.

var totalCost = applePerKg * 2 + orangePerKg * 3;

var moneyToReturn = moneyIHave - totalCost;

console.log(moneyToReturn);
