/**
 * * Type Assertions
 * * Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
 */

// Example 1

let message;
message = "abc";

let count = (<string>message).length;
console.log(count);

// Example 2

let finalNumber;

finalNumber = "1923";

let numberCount = (finalNumber as string).length;

console.log(numberCount);
