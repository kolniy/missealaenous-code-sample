var square = x =>  x * x;
console.log(square(9));

var user = {
    name: 'Kolawole',
    sayHi : () => {
        console.log(arguments);
        console.log(`Hi. i'm ${this.name}`);
    },
    sayHiAlt(...arguments){
        console.log(arguments);
        console.log(`Hi. i'm ${this.name}`); 
    }
};

user.sayHiAlt(1,2,3)