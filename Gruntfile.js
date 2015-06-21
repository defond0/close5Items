'use strict';
module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			'lint': {
				options: { jshintrc: true },
				src:[
				'*.js'
				]
			},
		},
		concat: {
		    options: {
		      separator: ';\n',
		    },
		    dist: {
		      src: [ 'scripts/handlebars.runtime.min.js','scripts/templates.js','scripts/scripts.js'],
		      dest: 'scripts/built.js',
		    },
		},
		uglify: {
			options:{
				mangle:true,
				sourceMap:true,
				mangleProperties:true,
			},
 			js:{
 				src: 'scripts/built.js',
 				dest: 'public/js/scripts.js'
 			}
 		},

		handlebars: {
		  compile: {
		  	options: {
            	namespace: 'Handlebars.templates',
            	processName: function(filePath) {
        			return filePath.replace(/^views\//, '').replace(/^partials\//,'').replace(/^html\//,'');
    			}
        	},
		    files: {
		      'scripts/templates.js': 'views/partials/results.html'
		    }
		  }
		}
	});

	grunt.registerTask('lint',['jshint']);
	grunt.registerTask('package',['handlebars','concat','uglify']);
};