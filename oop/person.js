class Person {
    constructor(firstname, lastname, age, likes = []){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.likes = likes
    }

    getBio(){
        let bio = `${this.firstname} is ${this.age}. `

        this.likes.forEach((like) => {
            bio +=  `${this.firstname} likes ${like}. `
        })
       return bio
    }

    set fullName(fullName){
        const names = fullName.split(' ')
        this.firstname = names[0]
        this.lastname = names[1]
    }
    get fullName(){
        return `${this.firstname} ${this.lastname}`
    }
}

class Employee extends Person{
    constructor(firstname, lastname, age, position, likes){
        super(firstname, lastname, age, likes)
        this.position = position
    }
    getBio(){
        return `${this.fullName} is a ${this.position}`
    }
    getYearsLeft(){
        return `${65 - this.age} years left`
    }
}


class Student extends Person{
    constructor(firstName, lastName, age, grade, likes){
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(score){
        this.grade += score
    }
    getBio(){
        return this.grade >= 70 ? `${this.firstname} is passing the course` : `${this.firstname} is failing the course`
    }
}

const newStudent = new Employee('kolawole', 'olaniyi', 23, 40)
newStudent.fullName = 'Peters olaniyi'
console.log(newStudent.getBio())
// newStudent.updateGrade(30)
// console.log(newStudent.getBio())

// const me = new Employee('kolawole', 'olaniyi', 23, 'software developer', ['preaching', 'making friends'])
// console.log(me)
// me.setName('james olaniyi')
// console.log(me.getBio())
// console.log(me.getYearsLeft())

// const person2 = new Person('jane', 'mary', 34)
// console.log(person2.getBio())




// Old Method
// const Person = function(firstname, lastname, age, likes = []){
    //     this.firstname = firstname
    //     this.lastname = lastname
    //     this.age = age
    //     this.likes = likes
    // }
    
    // Person.prototype.getBio = function(){
    //    let bio = `${this.firstname} is ${this.age}. `
    
    //    this.likes.forEach((like) => {
    //        bio +=  `${this.firstname} likes ${like}. `
    //    })
    
    //    return bio
    // }
    
    // Person.prototype.setName = function(fullName){
    //     const names = fullName.split(' ')
    //     this.firstname = names[0]
    //     this.lastname = names[1]
    // }