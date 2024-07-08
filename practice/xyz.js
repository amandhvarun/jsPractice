// function prinSum(n){
//     let a = 0;
//     for(let i=0;i<n;i++){
//         a += i;
//     }
//     return a;
// }

function call(){
    console.log(15);
}

function synSleep(){
    let a=0;
    for(let i=0;i<1000;i++){
        a++;
    }
    console.log(a);
}

// synSleep();
// call(100);
setTimeout(call,5000);
console.log("HELLO");