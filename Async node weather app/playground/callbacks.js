var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'kolawole olaniyi'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(345, (userDet) => {
 console.log(userDet);
});

console.log("just log");

