import chai from 'chai'
import server from '../index.js'
import chaiHttp from 'chai-http'
import { response } from 'express';



//Assertion Style
chai.should();

chai.use(chaiHttp)

describe('User Routes', () => {

    //Test the get all user route
    describe("GET /users/", () => {
        it("It should get all the users", (done) => {
            chai.request(server)
                .get("/users/")
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('array')
                    response.body.should.deep.equal([])
                done();
                })
        })
    })

    //Test to see if user can be created
    describe("POST /users/add", () => {

        const user = {
            name : "Chet",
            email : "Chet@johnmail.com",
            address : "2 John St.",
            password : "Password"
        }
        it("It should save a new user to the database", (done) => {
            chai.request(server)
                .post('/users/add/')
                .send(user)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.equal('User added!');
                done();
                })
        })
    })

    //Test to make sure a new user cannot be made with the same email
    describe("POST /users/add", () => {
        const user = {
            name : "Chet",
            email : "Chet@johnmail.com",
            address : "2 John St.",
            password : "Password"
        }
        chai.request(server)
            .post('/users/add/')
            .send(user)

        it("It should throw an error", (done) => {
            chai.request(server)
            .post('/users/add/')
            .send(user)
            .end((err, response) => {
                response.should.have.status(400)
                response.text.should.equal('Email already exists');
            done();
            })
        })
    })

    //Test to see if get all user route returns a user after one has been added to the database
    describe("POST /users/add", () => {
        const user = {
            name : "Chet",
            email : "Chet@johnmail.com",
            address : "2 John St.",
            password : "Password"
        }
        chai.request(server)
            .post('/users/add/')
            .send(user) 

        it("It should return an array of length 1 with the added user", (done) => {
            chai.request(server)
                .get("/users/")
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('array')
                    response.body.length.should.be.eql(1)
                    response.body[0].name.should.deep.equal(user.name)
                    response.body[0].email.should.deep.equal(user.email)
                    response.body[0].address.should.deep.equal(user.address)
                done();
            })
        } )
    })
    //Test to see if the user can login with correct username and password
    describe("GET /users/login", () => {
        const user = {
            name : "Chet",
            email : "Chet@johnmail.com",
            address : "2 John St.",
            password : "Password"
        }
        chai.request(server)
            .post('/users/add/')
            .send(user) 
        
        it("Should return 200 status and return json webtoken", (done) => {
            chai.request(server)
                .get('/users/login')
                .send({email: "Chet@johnmail.com", password: "Password"})
                .end((err, response) => {
                    response.should.have.status(200)
                    response.header['auth-token'].should.be.a('string')
                done();
                })
        }) 
    })

})