'use strict';
$(document).ready(function() {
	$( 'form' ).on( 'submit', function(e) {
	 	e.preventDefault();
	 	var results = getJsonFromForm($(this).serializeArray());
	 	getItems(results);
	 	$('.qs').text($.param(results));
		$('.dataCode').text(JSON.stringify(results));
	});

	$('.apiInput').on('input', function(e){
		updateData(e);
	})
});
var getItems = function(data){
	if(data.loc){
		data.loc=JSON.parse('[' + data.loc + ']');
	}
	$.ajax({
		url:'/api/v1/items',
		method:'get',
		data:data,
		dataType:'json',
		success: function(results){ 
			if(results.results) {
				results.results=transformArray([].concat(results.results));
			}
			loadResults(results);
		},
		error: function(err){
			console.log(err);
		}
	});
}

var getJsonFromForm = function(form){
	var results ={};
	for(var i = 0; i<form.length;i++){
		if(form[i].value){
			results[form[i].name]=form[i].value
		}
	}
	return results;
}


var transformArray = function(a){
    var res = [];
    var tmp = [];
    a.map(function(cur,i){
    	cur.idx=i+1;
        if(i>0&&i%3===0){
            res.push(tmp);
            tmp=[];
        }
        tmp.push(cur);
    });
    if(tmp.length>0){
        res.push(tmp);
    }
    return res;
};

var updateData = function(e){
	e.preventDefault();
	var form = $('input[name='+e.target.name+']').closest('form');
	form.submit();
}

var loadResults=function(data){
	var content = Handlebars.templates['results.html']({data:data});//jshint ignore:line
	$('#results').replaceWith(content);

}
