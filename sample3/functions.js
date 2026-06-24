
// some other code snippet
const a = 10;
const b = 2;
summation(a ,b);
// const aplusb = a + b;
// console.log("Result :", aplusb);

// named function
function summation(r , k) {
    const result = r + k;
    console.log("result :",result);
    
}

summation(20 , 30)

/* function greet() {
    console.log("hey  welcome to our application");
    
}
greet()

function greet(userName) {
    console.log("hey  welcome to our application", userName);
    
}
greet("Prathamesh Mete") */


// anonymous function / function expression
let summaton = function (){
    const result = r + k;
    return result;
}
console.log(summation(20 , 40));

// nested function
function addsquares(x , y) {

    const a = square (x);
    const b = square (y);

    function square(num) {
        return num*num;
        
    }
    return a+b
    
}
console.log(addsquares(3 , 2));



