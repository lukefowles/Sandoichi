import chai from 'chai'
import server from '../index.js'
import chaiHttp from 'chai-http'

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
                done();
                })
        })
    })

})