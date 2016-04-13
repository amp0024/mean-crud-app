var mongoose = require('mongoose');


// drop the database
function dropDatabase(done) {
	mongoose.connection.db.dropDatabase();
	done();
}

module.exports = {
	dropDatabase: dropDatabase
};

// then create the db


 