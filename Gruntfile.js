module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dist: {
                src: ['js/**/*.jsx', 'js/**/*.js'],
                dest: 'bundle.js',
                options: {
                    transform: ['reactify'],
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask('default', ['browserify'])
}
