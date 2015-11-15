module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Uglify task
        uglify: {
            jquery: {
                file: {
                    'bower_components/jquery/dist/jquery.js' : 'js/jquery.min.js'
                }
            },
        },

        // Compass task
        compass: {
            prod: {
                options: {
                    sassDir: ['sass'],
                    cssDir: ['css'],
                    fontsDir: ['fonts'],
                    httpFontsPath: '../fonts',
                    httpFontsDir: '../fonts',
                    environment: 'production',
                    outputStyle: 'nested'
                }
           },
        },

        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            scripts: {
                options: {
                    destPrefix: 'js'
                },
                files: {
                    'bootstrap.min.js': 'bootstrap/dist/js/bootstrap.min.js',
                    'jquery.fancybox.pack.js': 'fancybox/source/jquery.fancybox.pack.js',
                    'jquery.flexslider-min.js': 'flexslider/jquery.flexslider-min.js',
                    'modernizr.js': 'modernizr/modernizr.js',
                    'retina.min.js': 'retinajs/dist/retina.min.js',
                    'jquery.waypoints.min.js': 'waypoints/lib/jquery.waypoints.min.js'
                }
            },
            image: {
                options: {
                    destPrefix: 'images'
                },
                files: {
                    'blank.gif': 'fancybox/source/blank.gif',
                    'fancybox_loading.gif': 'fancybox/source/fancybox_loading.gif',
                    'fancybox_loading@2x.gif': 'fancybox/source/fancybox_loading@2x.gif',
                    'fancybox_overlay.png': 'fancybox/source/fancybox_overlay.png',
                    'fancybox_sprite.png': 'fancybox/source/fancybox_sprite.png',
                    'fancybox_sprite@2x.png': 'fancybox/source/fancybox_sprite@2x.png',
                }
            }
        },

        // Connect task
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                // hostname: 'localhost',
                hostname: '0.0.0.0',
                livereload: 35728,
            },
            livereload: {
                options: {
                    open: true,
                    base: './'
                }
            }
        },

        // Watch task
        watch: {
            gruntfile: {
                files: ['Gruntfile.js']
            },
            html: {
                files: ['{,*/}*.html'],
                tasks: [],
                options: {
                    spawn: false
                }
            },
            compass: {
                files: ['sass/**/*.{scss,sass}'],
                tasks: ['compass']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '{,*/}*.html',
                    'css/*.css',
                    'js/*.js',
                ]
            }
        }

    });
 
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    grunt.registerTask('default', ['uglify','compass','bowercopy','connect:livereload','watch']);
};