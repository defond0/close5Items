this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["results.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.status : stack1), depth0));
},"3":function(depth0,helpers,partials,data) {
    return "200";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.message : stack1), depth0))
    + "</h2> <h2>}</h2> ";
},"7":function(depth0,helpers,partials,data) {
    return "null</h2>";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <h2>results:[</h2>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.results : stack1),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	    	<h2>]<br>}</h2>\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return "	    		<div class=\"row\">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	    		</div>\n";
},"11":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "						<div class=\"col-sm-4 col-md-4 col-lg-4\">\n							<h3>"
    + alias2(alias1((depth0 != null ? depth0.idx : depth0), depth0))
    + "</h3>\n							{<br>\n			        		id : "
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "<br>\n							loc : "
    + alias2(alias1((depth0 != null ? depth0.loc : depth0), depth0))
    + "<br>\n							userId : "
    + alias2(alias1((depth0 != null ? depth0.userId : depth0), depth0))
    + "<br>\n							price : "
    + alias2(alias1((depth0 != null ? depth0.price : depth0), depth0))
    + "<br>\n							status : "
    + alias2(alias1((depth0 != null ? depth0.status : depth0), depth0))
    + "<br>\n							createdAt : "
    + alias2(alias1((depth0 != null ? depth0.createdAt : depth0), depth0))
    + "<br>\n							description : <p>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\n							},\n				        </div>\n";
},"13":function(depth0,helpers,partials,data) {
    return "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"results\">\n	 <div class=\"container-fluid\">\n    	<div class=\"row\">\n    		<h2>{</h2>\n    		<h2>status:"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.message : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</h2>\n        	<h2>message:"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.message : stack1),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\n       \n        </div>\n        <div class=\"row\">\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.results : stack1),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>";
},"useData":true});