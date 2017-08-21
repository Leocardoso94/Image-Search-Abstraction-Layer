const mongoose = require('mongoose');
const Search = require('./models').Search;

const conn = require('./connect');
function save(term) {
    const search = new Search({
        term: term,
        when: new Date()
    });
    search.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('salvo!');
        }
    });
}

function find(callback) {

    const results = [];
    const cursor = Search.find({}).select({ "term": 1, "_id": 0, "when": 1 }).sort({ when: -1 }).limit(10).cursor();

    cursor.on('data', function (doc) {
        results.push(doc)
    });
    cursor.on('close', function () {
        callback(results);
    });
}

const querys = {
    save: save,
    find: find
}

module.exports = querys;