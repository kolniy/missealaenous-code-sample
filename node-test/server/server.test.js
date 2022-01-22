const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('server', () => {
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page Not Found.'
                });
            })
            .end(done);
        });        
    })

    describe('GET /users', () => {
        it('should return a single user', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'kolawole olaniyi',
                    age: 23
                })
            })
            // .expect((res) => {
            //     expect(res.body).toBe('array')
            // })
            .end(done);
        });
    })
})

