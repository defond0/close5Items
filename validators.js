'use strict';

module.exports={
	validators:function(requiredKeys,fieldMap){
		
		var loadOptions=function(key,qs){
			var options={
				err:null
			};
			for(var i=0;i<fieldMap[key].length;i++){
				options[fieldMap[key]]=qs[fieldMap[key]];
			}
			return options;
		};

		return {
			results:function(results){
				var response={
					message:null,
					results:results[0]
				};
				if(results.length===0){
					response.message='No results for query';
					return response;
				
				}
				if(results.length>1){
					response.err='Provided two unique arguments, returning 1st detected, please run in seperate querys';
					return response;
				}	
				return response;
				
			},
			loc:function(key,qs){
				var options = loadOptions(key,qs);
				var val=qs[key];
				if(val===null){
					options.err = {status: 402,message: 'No argument provided for '+key};
				}
				if(val.length!==2){ 
					options.err= {status: 402,message: 'Imporoper agrument for '+key};
				}
				return options;
			},
			sortBy:function(key,qs){
				var options = loadOptions(key,qs);
				var val=qs[key];
				if(val!=='price'&&val!=='date'){
					options.err = {status: 402,message: 'Imporoper argument, must be price or date'};
				}
				if(val===null){
					options.err = {status: 402,message: 'No argument provided for '+key};
				}
				return options;

			},
			itemId:function(key,qs){
				var options = loadOptions(key,qs);
				var val=qs[key];
				if(val===null){
					options.err = {status: 402,message: 'No argument provided for '+key};
				}
				return options;
			},
			userId:function(key,qs){
				var options = loadOptions(key,qs);
				var val=qs[key];
				if(val===null){
					options.err = {status: 402,message: 'No argument provided for '+key};
				}
				return options;
			},
		};
	}
};