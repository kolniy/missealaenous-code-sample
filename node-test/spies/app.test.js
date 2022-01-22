const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('kolawole', 23); 
        expect(spy).toHaveBeenCalledWith('kolawole', 23);
    });

    it('should call the saveUser with user object', () => {
        var email = 'kolaniyi3@gmail.com';
        var password = '1234abc';

        app.handleSignUp(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
});