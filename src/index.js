const express = require('express');
const morgan = require('morgan');
const  {engine}  = require('express-handlebars');
const path = require('path');
const body_parser = require('body-parser');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join( __dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',  
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(body_parser.urlencoded({extended:true}));

//Global Variables
app.use((req, res, next) => {
    next();
});
material = undefined;
cantidad_material = 0;
residuos = 0;
tiempo = 0;

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));

//Public
app.use(express.static(path.join(__dirname, 'public')));

//Starting  the server
app.listen(app.get('port'),  () => {
    console.log('Server on port', app.get('port'));
});