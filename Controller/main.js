var counter = 0;
const mainController = {};

mainController.about = (req, res, next) => {
    res.send('Hello about!');
};

//Example of render html ((pug))
mainController.counter = (req, res, next) => {
    res.render('counter', { title: 'counter page', counterVal: counter })
    counter++;
}

module.exports = mainController;