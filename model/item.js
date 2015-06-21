'use strict';
var mongoose = require('mongoose');

var itemsSchema = new mongoose.Schema(
	{
		id:String,
		price:String,
		loc:[Number],
		email:String,
		userId:String,
		description:String,
		status: String,
		createdAt: String
	},
	{collection:'items'}
);

mongoose.model('items', itemsSchema);