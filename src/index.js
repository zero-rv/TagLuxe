const express = require('express');
const exphbs = require('express-handlebars').engine;
const handlebars = require('./helper/helpers');
const morgan = require('morgan');
const path = require('path');

const reload = require('reload');

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());


//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine('.hbs', exphbs({
    extname: '.hbs',
    handlebars: handlebars,
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
reload(app);