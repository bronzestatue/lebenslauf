module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      // CSS minification
      cssmin: {
        target: {
          files: {
            'dist/css/styles.min.css': ['css/*.css'] // Minify all CSS files in the css folder
          }
        }
      },
  
      // JavaScript minification
      uglify: {
        target: {
          files: {
            'dist/js/main.min.js': ['js/*.js'] // Minify all JS files in the js folder
          }
        }
      },
  
      // Watch for changes
      watch: {
        css: {
          files: 'css/*.css',
          tasks: ['cssmin']
        },
        js: {
          files: 'js/*.js',
          tasks: ['uglify']
        }
      }
    });
  
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Custom tasks
    grunt.registerTask('build', ['cssmin', 'uglify']); // Define the build task
  
    // Default task(s).
    grunt.registerTask('default', ['build', 'watch']);
  };
  