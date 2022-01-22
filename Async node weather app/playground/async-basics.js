console.log("starting app");

setTimeout(() => {
    console.log("Inside callback");
}, 2000);

setTimeout(() => {
    console.log("Second set Time out works");
}, 0);

console.log("Ending App");