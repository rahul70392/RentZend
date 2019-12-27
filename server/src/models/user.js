var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    zipCode: {
        type: String
    },
    file: {
        type: String
    }
});

var User = mongoose.model('User', userSchema);
module.exports = {
    User
};