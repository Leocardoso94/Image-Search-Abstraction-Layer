const mongoose = require('mongoose');

const Search = mongoose.model('Search', { 
    term: String,
    when: Date
 });

const models = {
    Search: Search
}

module.exports = models;