console.log("first");
console.log("second");
console.log("third");


setTimeout(function(){
    console.log("this will exwcuted after 3 sec");  
},3000)

function getCandies (callback1) {
    setTimeout(() => {
        const candies = "🍬"
        console.log("here is our candie",candies);
        // return candies
        callback1(candies)
    }, 5000);
}

function HandoverKeys (candies , callback2 ) {
    setTimeout(() => {
        const keys = candies + "🔑"
        console.log("In our handoverKeys Method", keys);
        callback2(keys)
    }, 3000);
} 

function onboarding (keys , callback3 ) {
    setTimeout(() => {
        const onboarded = keys + "🏨"
        console.log("onboarding", onboarded);
        callback3(onboarded)
    }, 3000);
} 

// console.log(getCandies());
getCandies((candies) => {
    HandoverKeys(candies, (keys) => {
        onboarding (keys, (onboarded) => {
            console.log("welcome to oure restorent", onboarded);
            
        })
        
        
    })     
})