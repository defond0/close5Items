'use strict';
var mongoose=require('mongoose');
var items=require('./items.json');
exports.seed= function(file){
	var Item = mongoose.model('items');
	for (var i=0;i<items.length;i++){
		var item = new Item(items[i]);
		item.save(function(err,item){
			if(err){
				console.log(err);
			}
		});
	}

}