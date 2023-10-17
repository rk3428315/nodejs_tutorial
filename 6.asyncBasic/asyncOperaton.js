let a = 10, b = 10;

// setTimeout(() => {
//     console.log(a + b);
// }, 2000);


let waitingData = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(30);
        // console.log(a + b);
    }, 2000);
});

waitingData.then((data)=>{
    b = data;
    console.log(a + b);
});
// console.log(a + b);
