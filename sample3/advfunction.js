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

const calculate = (a, b, operation) => {
    return operation(a, b)
}
console.log(calculate(2,3,function(n1,n2){
    return n1+n2
}));

