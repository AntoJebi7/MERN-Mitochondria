// Variables and Data Types in JavaScript

// Declaring variables using var, let, and const
var oldVariable = "I am a var variable"; // Can be re-declared and updated
let modernVariable = "I am a let variable"; // Can be updated but not re-declared in the same scope
const constantVariable = "I cannot be changed"; // Cannot be updated or re-declared

console.log(oldVariable);
console.log(modernVariable);
console.log(constantVariable);

// Data Types

// 1. String
let name = "John Doe";
console.log("String:", name);

// 2. Number
let age = 30;
console.log("Number:", age);

// 3. Boolean
let isStudent = true;
console.log("Boolean:", isStudent);

// 4. Undefined
let undefinedVariable;
console.log("Undefined:", undefinedVariable);

// 5. Null
let emptyValue = null;
console.log("Null:", emptyValue);

// 6. Object
let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25
};
console.log("Object:", person);

// 7. Array
let colors = ["red", "green", "blue"];
console.log("Array:", colors);

// 8. Symbol (unique value)
let sym = Symbol("unique");
console.log("Symbol:", sym);

// 9. BigInt (for very large numbers)
let bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber);

// Dynamic Typing
let dynamic = "I am a string";
console.log(dynamic);
dynamic = 42; // Now it's a number
console.log(dynamic);
