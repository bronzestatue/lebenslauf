module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'main.js',
                dest: 'build/main.min.js'
            }
        },
        cssmin: {
            build: {
                src: 'styles.css',
                dest: 'build/styles.min.css'
            }
        },
        watch: {
            scripts: {
                files: ['main.js', 'styles.css'],
                tasks: ['uglify', 'cssmin'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin']);
    grunt.registerTask('build', ['uglify', 'cssmin']);
};
