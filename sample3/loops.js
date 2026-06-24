// for loop
/* for (let i = 1; i <= 10; i++) {
    console.log("Prathamesh",i);
} */

// while loop

/* let i = 1;
while (i <= 10) {
    console.log("Prathamesh",i);
    i++;
} */

// do while loop

/* let j = 1;
do {
    console.log("Prathamesh",j);
    j++;
}while (j <= 10);
 */
// continue and break

/* let i = 0;
while (i < 10) {
    i++;
        if (i == 5) {
            continue; // Skip the rest of the loop body for i = 5
    }
    console.log("Prathamesh",i);
}
 */

/* let i = 0;
while (i < 10) {
    i++;
        if (i == 5) {
            break;
    }
    console.log("Prathamesh",i);
}
 */

/* for (let i = 1; i <= 10; i++) {
    console.log(i);
} */

/* for (let i = 2; i <= 20; i += 2) {
    console.log(i);
} */

/* let i = 1;
while (i <= 5) {
    console.log("AURA");
    i++;
} */

/* let i = 10;
do {
    console.log(i);
    i--;
}
while (i >= 1); */

for (let i = 1; i <= 10; i++) {
    console.log(i);


    switch (i) {
        case 3:
        case 6:
        case 9:
            console.log("Fizz");
            break;
        case 5:
        case 10:
            console.log("Buzz");
            break;
        default:
            // No additional output for other numbers
            break;
    }
}