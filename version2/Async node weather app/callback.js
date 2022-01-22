// setTimeout(() => {
//     console.log('2 seconds are up');
// }, 2000)

// const names = ['dami', 'kola', 'peter'];
// const shortName = names.filter((name) => {
//     return name.length <= 4
// })

// const geoCode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//         'latitude':0,
//         'longitude':0
//     }
//     callback(data) 
//   }, 2000)
// }

// geoCode('Abuja', (data) => {
//   console.log(data);
// });

const add = (a,b, callback) => {
    setTimeout(() => {
        callback(a+b);
    }, 2000)
}

add(1,4, (sum) => {
    console.log(sum);
})
