process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var should = chai.should();
var testUtilities = require('../utilities');

chai.use(chaiHttp);


describe('student routes', function() {


  beforeEach(function(done) {
    // drop the database
    testUtilities.dropDatabase(done);
    // seed the db here as well if wanted..
  });

  afterEach(function(done) {
    // drop the db
    testUtilities.dropDatabase(done);
  });

  describe('/GET students', function() {

    it('should return all students', function(done) {
      // connect to the server
      chai.request(server) 
      // get request 
      .get('/students')
      .end(function(err, res){
        res.status.should.equal(200);
      done();
      });
    });
  });

});