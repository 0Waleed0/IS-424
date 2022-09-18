const book = require("../models/book");

const bookController = {};

bookController.findBook = (req, res, next) => {
    res.send("you choose a book number " + req.params.id);
};

bookController.findBookPost = (req, res, next) => {
    book.findBookById(req.body.bookID, (err, data) => {
        if (!err) {
            res.render("book", { bookData: data, title: 'ss' });
            console.log(data);
        } else {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found book with id ${req.body.bookID}.`,
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving book with id " + req.body.bookID,
                });
            }
        }
    });
};

bookController.allBooks = (req, res, next) => {
    book.allBooks((error, data) => {
        if (error) res.status(500);
        else res.send(data);
    });
};

module.exports = bookController;