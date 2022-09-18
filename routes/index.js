const express = require('express');
const route = express.Router();
const controller = require('../Controller');
const path = require("path");
//http methods: get post delete update

// Example of send static Html
route.get('/', (req, res) => {
    //res.sendFile('views/home.html', { root: '.' }); or
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

route.get('/about', controller.main.about);
route.get('/counter', controller.main.counter);
route.get('/findBook/:id', controller.books.findBook);
route.post('/findBook', controller.books.findBookPost);
route.get('/allBooks', controller.books.allBooks);

module.exports = route;