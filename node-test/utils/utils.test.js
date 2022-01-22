const expect = require('expect');
const utils = require('./utils');

describe('utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
        
            expect(res).toBe(44).toBeA('number');
        });
    })

    it('should square a number', () => {
        var res = utils.square(3);
    
        expect(res).toBe(9).toBeA('number');
    })
    
    it('should async add two numbers', (done) => {
        utils.AsyncAdd(5,5, (sum) => {
            expect(sum).toBe(10).toBeA('number');
            done();
        })
    });
    
    it('should async square two numbers', (done) => {
        utils.AsyncSquare(10, (sqr) => {
            expect(sqr).toBe(100).toBeA('number');
            done();
        })
    });
})

it('should be a valid user', () => {
    var user = {
        age:23,
        location:'Abuja'
    };

    var res = utils.setName(user, 'kolawole olaniyi');
    expect(res).toInclude({
        firstName:'kolawole',
        lastName:'olaniyi'
    });
})

// it('should expect some values', () => {
//     // expect({name:'k olawole'}).toNotEqual({name:'Kolawole'});
//     // expect([2,3,4]).toExclude(7);
//     expect({
//         name:'Kolawole',
//         age: 23,
//         location:'Abuja'
//     }).toInclude({
//         age:23
//     });
// })