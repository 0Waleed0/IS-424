const express = require('express');
const path = require('path');
const bodyParser = require("body-parser")
const app = express();
const route = require('./routes');
const db = require('./database')
const port = 3000;

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "./views")); //__dirname is an environment variable that tells you absolute path
// Body-parser middleware to handle post methods
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // to deal with json type
app.use('/', route);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});