var asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            } else {
                reject('Argument must be a number');
            }
        }, 1500);
    })
};

asyncAdd(10,'2').then((res) => {
     console.log('Results :', res);
     return asyncAdd(res, 33);
}).then((res) => {
  console.log('should be 45: ',res);
}).catch((errorMsg) => {
    console.log(errorMsg);
})





// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Hey it worked');
//         reject('Oh Snap! Something went wrong');
//     }, 2500) 
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMsg) => {
//   console.log('Error: ', errorMsg);
// });