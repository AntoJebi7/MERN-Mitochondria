//Logical Operator


var name = "anto";
let num = "10"
console.log(typeof(num));
console.log(Number(num) + String(45))
console.log(Boolean([1]))


let arr = [1,2,45,67];
for(let j in arr){
    console.log(arr[j]);
}















//Logical AND ( && )

/* cond1    cond2  Result
    true     true   true
    true     false  false
    false    true   false
    false    false  false 
*/

// let age = 18;

// // console.log(  age>=18 &&  age<=30  ); // true && true
// age = 35;
// console.log(  age>=18 &&  age<=30  ); // true && false
// age = 16;
// console.log( age>=18 &&  age<=30); //false && true // Short Circuit Evaluation

// let idProof = "Adhaar";

// console.log(  idProof == "PanCard" && idProof=="Driving License" ); // false && false

//Logical OR( || )

/* cond1    cond2  Result
    true     true   true
    true     false  true
    false    true   true
    false    false  flase 
*/

// let pwd_input = "12345"

// console.log(  pwd_input == "12345" || pwd_input == "54321" ); // true || false

// let pwd_input = "54321"
// // console.log(  pwd_input == "12345" || pwd_input == "54321" ); // false || true 

// let userName = "abc"

// console.log(  pwd_input == "54321" || userName == "abc" ); //true || true

// console.log(  pwd_input == "12345" || userName == "xyz"); // false || false

//Logical Not ( ! )

// console.log( !(10 > 4) );
// console.log( !false );