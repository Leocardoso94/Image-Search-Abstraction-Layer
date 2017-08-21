const DBNAME = 'leo_freecodecamp'
const DBUSER = 'root'
const DBPASSWORD = 'root'
const HOST = 'ds027618.mlab.com:27618'
const mongoose = require('mongoose');

const conn = mongoose.connect(`mongodb://${DBUSER}:${DBPASSWORD}@${HOST}/${DBNAME}`);

module.exports = conn;