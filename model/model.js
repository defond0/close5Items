'use strict';
module.exports={
	items:function(items){

		var ascending = function(ascending,items){
			if(ascending==='false'){
				return items.reverse();
			}
			return items;
		};

		var sorts = {
			price : function(a,b){
				return a.price-b.price;
			},


			date : function(a,b){
				var dateA = new Date(a.createdAt.replace('ISODate(','').replace(')',''));
				var dateB = new Date(b.createdAt.replace('ISODate(','').replace(')',''));
				return dateA < dateB ? 1 : -1;
			},

			distance : function(ctx,a,b){
				return dist(a.loc,ctx.loc)-dist(b.loc,ctx.loc);
			}
		
		}

		var getId = function(Id){
			for (var i=0;i<items.length;i++){
				if(items[i].id===Id){
					return items[i];
				}
			}
		};

		var getUser = function(userId){
			var matches=[];
			for (var i=0;i<items.length;i++){
				if(items[i].userId===userId){
					matches.push(items[i]);
				}
			}
			return matches;
		};

		var getLocation = function(location){
			var matches=[]
			for(var i=0;i<items.length;i++){
				var d=dist(items[i].loc,location);
				if(d<50){
					matches.push(items[i]);
				}
			}
			return matches.sort(sorts.distance.bind(null,{loc:location}));
		};

		var toRad = function(num){
			return num * Math.PI / 180;
	  	};

	  	var dist = function(loc1,loc2){
	  		var R = 3961; // miles
			var omega1=toRad(loc1[0]);
			var omega2=toRad(loc2[0]);
			var dlat=toRad(loc1[0]-loc2[0]);
			var dlon=toRad(loc1[1]-loc2[1]);
			var a = Math.sin(dlat/2)*Math.sin(dlat/2)+Math.cos(omega1)*Math.cos(omega2)*Math.sin(dlon/2)*Math.sin(dlon/2);
			var c = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
			return R * c;
	  	};
	  	var sortBys={
	  		price:function(order){
				items.sort(sorts.price);
				return ascending(order,items);
			},
			date:function(order){
				items.sort(sorts.date);
				return ascending(order,items);
			},
	  	};
	  	
		return {
			sortBy:function(value,options){
				return sortBys[value](options.ascending);
			},

			itemId:function(Id,options){
				return getId(Id);
			},

			userId:function(userId,options){
				return getUser(userId);
			},
			loc:function(location,options){
				var matches = getLocation(location);
				return ascending(options.ascending, matches);
			}
		};
	}	
}

