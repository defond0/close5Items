'use strict';

var settings=require('./settings.json');
var mongoose=require('mongoose');
var model = require('./model/model.js');

var list=null;

var fieldMap = {
	loc:['ascending'],
	sortBy:['ascending'],
	itemId:[],
	userId:[],
};

var requiredKeys=[
	'loc','sortBy',
	'itemId', 'userId',
];

var validators = require('./validators.js').validators(requiredKeys,fieldMap);

var getList=function(){
	if(settings.mongo){
		var Item = mongoose.model('items');
		Item.find({},function(err,docs){
			if(err){
				console.log(err);
			}
			list=docs;
		});
	}else{
		list=require('./items.json');
	}
	return list;
};


var director = function(qs,res){
	var items = model.items(getList());
	var keys = Object.keys(qs);
	var results = [];
	for(var i=0;i<keys.length;i++){
		if(requiredKeys.indexOf(keys[i])!==-1){
			var options = validators[keys[i]](keys[i],qs);
			if(options.err){
				return options.err;
			}
			results.push(items[keys[i]](qs[keys[i]],options));		
		}
	}
	res.send(validators.results(results));
};

exports.getItems = function(req,res){
	var qs = req.query;
	director(qs,res);
};

exports.getDemo = function(req,res){
	res.render('demo');
};