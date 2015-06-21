'use strict';
// require('./database.js')
var mongoose = require('mongoose');
var helmet = require('helmet');
var express = require('express');
var handlebars = require('handlebars');
var exphbs  = require('express-handlebars');
var routes = require('./routes.js');
var settings = require('./settings.json');

var logger = function(req, res, next) {
    console.log(req.path);
    next();
};


var app = express();

if(settings.mongo){
	mongoose.connect('mongodb://localhost:27017/dbItem');
	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error'));
	db.once('open',function cb(){
		console.log('Connected to Mongo');
	});

	//Initialize Model
	require('./model/item.js');
	if (!db.collections.items.collection){
		require('./model/seed.js').seed('Close-Code-Challenge.md');
	}
}

// view engine setup
app.set('views', __dirname + '/views');
app.engine('.html', 
            exphbs({helpers: handlebars,
                    defaultLayout: 'main', 
                    extname: '.html',
                    partialsDir: 'views/partials/'}));
app.set('view engine', '.html');


//Implement CSP with Helmet
app.use(helmet.csp({
  defaultSrc: ["'self'"],// jshint ignore:line
  scriptSrc: [
  "'self'", // jshint ignore:line
  '*.maxcdn.bootstrapcdn.com',
  '*.ajax.googleapis.com',
  ],
  styleSrc: [
  "'self'",// jshint ignore:line
  '*.maxcdn.bootstrapcdn.com',
  ],
  fontSrc:[
  "'self'",// jshint ignore:line
  '*.maxcdn.bootstrapcdn.com'],
}));

// Implement X-XSS-Protection
app.use(helmet.xssFilter());

// Don't tell ppl we use express
app.use(helmet.hidePoweredBy());

//browsers wont check and auto execute mimetypes
app.use(helmet.nosniff());

//pass it to the router
app.use(require('./routes'));

//log it	
app.use(logger);

//route it
app.use(routes);



app.listen(settings.port, function () {
  console.log( 'API is running');
});	