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

// function getCandies (callback1) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const candies = "🍬"
//         console.log("here is our candie",candies);
//         // return candies
//         // callback1(candies)
//         resolve(candies)
//     }, 3000);
//     })
// }
// console.log(getCandies());
// // pending fullfill rejected 3 promises op

// async function xyz(){
//     try{
//         const xyz = await Abc();
//         console.log();
        
//     }
//     catch{

//     }
// }
// console.log("Start");

// async function demo(){
//     console.log("A");
// }

// demo();

// console.log("End");

// async function getCandies() {
//     try{
//         const keys = await HandoverKeys(candies)
//         console.log();
        
//         const boarded = await onboarding(keys)
//         console.log();

//         const result = await result(boarded)
//         console.log(result);
//     }
//     catch(error) {
//         console.log("rerror occured");
//     }
// }

// const createTicket = new Promise(function (resolve, reject){
//     const isbooked = true
//     if(isbooked){
//         resolve("Ticket confirmed 🎫")
//     }else{
//         reject("Booking failed ❌")
//     }
// })

// createTicket.then((data) => {
//     console.log("success : Ticket confirmed 🎫");
// }).catch((data) => {
//     console.log("Error : bookinng failed ❌");
// }).finally((data) => {
//     console.log("Welcome to ticket booking");
    
// })

// const login = new Promise(function (resolve, reject){
//     const islogin = true
//     if(islogin){
//         resolve("user logged in 👤")
//     }else{
//         reject("user not logged in 👤")
//     }
// })

// const getProfile = new Promise(function (resolve, reject){
//     const isgetProfile = true
//     if(isgetProfile){
//         resolve("Profile Loaded 📄")
//     }else{
//         reject("Profile not loaded 📄")
//     }
// })

// const showDashboard = new Promise(function (resolve, reject){
//     const isshowDashboard = true
//     if(isshowDashboard){
//         resolve("dashboard opened 🖥️")
//     }else{
//         reject("Dashboard failed to open 🖥️")
//     }
// })

// async function Async() {
//     try {
//         const loggedin = await login
//         console.log(loggedin);

//         const profile = await getProfile
//         console.log(profile);

//         const dashboard = await showDashboard
//         console.log(dashboard);
//     } catch (error) {
//         console.log(error);
//     }
// }

// Async();

// login
//     .then((data) => {
//         console.log(data);
//         return getProfile;
//     })
//     .then((data) => {
//         console.log(data);
//         return showDashboard;
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


function order (callback1) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const pizza = "🍕"
        console.log("here is our pizza",pizza);
        resolve()
    }, 5000);
    })
}

function payment (callback2) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const payment = "💳"
        console.log("Your payment is successfull",payment);
        resolve()
    }, 3000);
    })
}
function preparing (callback3) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const preparing = "👩🏻‍🍳"
        console.log("your pizza is preparing",preparing);
        resolve()
    }, 4000);
    })
}

function delivery (callback4) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const delivery = "🚚"
        console.log("your pizza is out for dwelivery",delivery);
        resolve()
    }, 5000);
    })
}

function delivered (callback5) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const delivered = "🏡"
        console.log("your pizza is delivered",delivered);
        resolve()
    }, 4000);
    })
}

async function fooddelivery() {
    try{
    const Order = await order()
    console.log(Order);

    const Payment = await payment()
    console.log(Payment);

    const prepare = await preparing()
    console.log(prepare);

    const out = await delivery()
    console.log(out);

    const home = await delivered()
    console.log(home);
    
    }
    catch(error) {
        console.log("Error : Something wrong "); 
    }     
}

fooddelivery()