module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "main.css": "src/main.less"
                }
            }
        },
        browserify: {
            dist: {
                src: ['src/**/*.jsx', 'src/**/*.js'],
                dest: 'bundle.js',
                options: {
                    transform: ['reactify'],
                }
            }
        },
        watch: {
            src: {
                files: ['src/**/*.less', 'src/**/*.js', 'src/**/*.jsx'],
                tasks: ['less', 'browserify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'browserify'])
}
