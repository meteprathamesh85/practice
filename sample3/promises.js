// const ticket = new Promise(function (resolve, reject){
//     const isboarded = true
//     if(isboarded){
//         resolve("You are eligible to onboard")
//     }else{
//         reject("you are not eligible to onboard")
//     }
// })
// ticket.then((data) => {
//     console.log("wohooo",data);
// }).catch((data) => {
//     console.log("oh no ",data);
// }).finally(() => {
//     console.log("this will be executed all time");
// })

function getCandies (callback1) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const candies = "🍬"
        console.log("here is our candie",candies);
        // return candies
        // callback1(candies)
        resolve(candies)
    }, 3000);
    })
}
console.log(getCandies());
// pending fullfill rejected 3 promises op

async function xyz(){
    try{
        const xyz = await Abc();
        console.log();
        
    }
    catch{
        
    }
}