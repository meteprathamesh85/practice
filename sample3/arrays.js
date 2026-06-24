/* let varname = 123;

let varname = [123,456,789];

let stud1 = "abc";
let stud2 = "def";
let stud3 = "ghi"; */

let studentarray = ["abc","def","ghi",123,true, function dummyFunction() {
    console.log("This is a dummy function");
},{name: "Prathamesh", age: 22}];

// console.log(studentarray);

// console.log(studentarray[5]);

/* console.log(studentarray.length);

studentarray.push("jkl");
studentarray[2] = "xyz";
console.log(studentarray);

let newArray = studentarray;
console.log(newArray);
newArray[0] = "pqr";
console.log(studentarray);
console.log(newArray); */

// console.log(studentarray.indexOf(123));

// console.log(studentarray.includes(456));

// console.log(studentarray);
// // studentarray.push("laptop");
// // console.log(studentarray);

// studentarray.unshift("mobile");
// console.log(studentarray);

// studentarray.pop();
// console.log(studentarray);

// studentarray.shift();
// console.log(studentarray);

// let marks = [90, 80, 70, 60, 50];

// console.log(marks);

// marks.sort();
// console.log(marks);

// let submarks = marks.slice(1,3);
// console.log(submarks);
/* 
marks.slice(1,3);
console.log(marks); */

// const skills = [
//     "HTML",
//     "CSS",
//     "JavaScript"
// ];

// skills.push("React");

// for(let i=0; i<skills.length; i++) {
//     console.log(skills[i]);
// }

// const numbers = [10,20,30,40,50];

// let sum = 0;

// for(let i=0; i<numbers.length; i++) {
//     sum = sum + numbers[i];
// }
// console.log(sum);

const tasks = [
    "Study JS",
    "Workout",
    "College Work"
];

for (let i=1; i<=tasks.length; i++) {
    console.log("Task " + i + ": " + tasks[i-1]);
}