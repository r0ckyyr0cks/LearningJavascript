function greet(){
    console.log("Hello, World! \nThis is Day 3 of scripting.");
}
greet();

function addTwoNumbers(a, b){
    return a + b;
}
let sum = addTwoNumbers(5, 10);
console.log("\nSum of 5 and 10 is: " + sum);

function toFahrenheit(celsius){
    return (celsius * 1.8) + 32;
}
let fahrenheit = toFahrenheit(37);
console.log("\n37 degrees Celsius in Fahrenheit is: " + fahrenheit);

const toFahrenheitArrow = (celsius) => (celsius * 1.8) + 32;
let fahrenheitArrow = toFahrenheitArrow(100);
console.log("\n100 degrees Celsius in Fahrenheit using arrow function is: " + fahrenheitArrow);