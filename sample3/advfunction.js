//  named function

/* function greet (){
    console.log("hey everyone");
    
}
greet() */

//  annonameous function

/* let greet2 = function () {
    console.log("hey everyone");
    
}
greet2() */

// arrow function

/* let greet3 = (username) => {
    console.log("hey everyone", username);
    
}
greet3("Prathamesh mete") */

/* const greet = (count) => {
    console.log("hello all", count);
    
}
greet(2) */

/* const square = (num) => {
    return num*num;
}
console.log(square(2));
 */

/* const square = (num) => num*num
console.log(square(2)); */

// called back function

/* const calculate = (a, b, operation) => {
    return operation(a, b)
} */
// method 1 = annonymous
/* const summation = calculate(2,3,function(n1,n2){
    return n1+n2
})

console.log(summation); */

// method 2 = named
/* function sub (a, b) {
    return a-b
}
const subtraction = calculate(2,3, sub )
console.log(subtraction); */

//  method 3 = arrow fiunction
/* const mul = (a, b) => {
    return a*b    
}
const multiplication = calculate(2,3, mul )
console.log(multiplication);
 */
/* console.log(calculate(2,3,function(n1,n2){
    return n1+n2
})); */

const arr = [ 2,5,6,8,9,0,-3,-5,-2];
// const printFirstNegativeNumber = (num) => {
//     return num<0
// }
// // const result = arr.find(printFirstNegativeNumber)
// const result = arr.findIndex(printFirstNegativeNumber)
// console.log(result);

/* arr.forEach((num, index) => {
    console.log("element",num , "index", index);
    
}) */

/* function multiply (a,b){
    return a*b;
}
console.log(multiply(5,4));
 */

/* const cube = (num) => num*num*num
console.log(cube(3));
 */

/* function subtract(a,b){
    return a-b;
}

let result = subtract(20,5);

console.log(result); */

/* function greet(name){
    return "Hello " + name;
}

function processUser(callback){
    console.log(callback("Prathamesh"));
}

processUser(greet); */

/* const map = [1,2,3,4,5];
const double = (num) => {
    return num * 2
}
const result = map.map(double)
console.log(result) */

/* function createCounter() {
    let count = 99;
    return function(){
        count++;
        return count;
    }
}
const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter()); */