module.exports = function(grunt) {
 
    grunt.initConfig({
 
        //our JSHint options
        jshint: {
            mine: ['js/*.js'] //files to lint
        },
		
		
		//our concat options
        concat: {
            options: {
                separator: ';' //separates scripts
            },
            dist: {
                src: ['js/*.js'], //Using mini match for your scripts to concatenate
                dest: 'js/script.js' //where to output the script
            }
        },
		
		//our uglify options
        uglify: {
            js: {
                files: {
                    'js/script.js': ['js/script.js'] //save over the newly created script
                }
            }
        },
		
		
		//our LESS options
		less: {
		  development: {
			files: {
			  "lib/custom/custom-bootstrap.css": "lib/custom/custom-bootstrap.less"
			}
		  }
		  
		},
		
		connect: {
		server: {
		  options: {
			port: 8081,
			base: '.',
			keepalive:true
		  }
		}
	  },
	  watch: {
		  css: {
			files: 'lib/custom/*.less',
			tasks: ['less']
			
		  }
	  }
		
		
    });
 
    //load our tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	//default tasks to run
    grunt.registerTask('default', ['less','connect']);
    grunt.registerTask('minus', ['concat', 'uglify','less','connect']);
	
	
	grunt.registerTask('development', ['jshint']);
    grunt.registerTask('production', ['jshint', 'concat', 'uglify']);
}