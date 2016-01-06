// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
        firstname: String,
        lastname: String,
        grade: Number,
        birthday: String,
        studentID: String,
        parent1email: String,
        parent2email: String,
        regionalsRoleplay: String,
        regionalsWritten: String,
        regionalsTShirt: String,
        regionalsForms: String,
        regionalsChecks: String,
        regionalsRoommate1: String,
        regionalsRoommate2: String,
        regionalsRoommate3: String,
        writtenPartner1: String,
        writtenPartner2: String,
        regionalsEventsFinalized: Number,
        roleplayPartner: String,
        registrationPayment: String
    }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
