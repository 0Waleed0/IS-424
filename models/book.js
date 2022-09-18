const db = require('../database');

const bookTable = {};

bookTable.findBookById = (id, callback) => {
    var findBookByIdQuery = `SELECT * FROM book WHERE id = ${id}`;
    db.query(findBookByIdQuery, function(error, result) {
        if (error) {
            callback(error, null);
        } else if (result.length) {
            callback(null, result[0]);
        } else
            callback({ kind: "not_found" }, null);
    });
}

bookTable.allBooks = (callback) => {
    var allBooksQuery = 'SELECT * FROM book';
    db.query(allBooksQuery, callback);
}

module.exports = bookTable;