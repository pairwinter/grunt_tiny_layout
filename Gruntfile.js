/*
 * grunt_tiny_layout
 * https://github.com/pairwinter/grunt_tiny_layout
 *
 * Copyright (c) 2014 DongDong Liu
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        tiny_layout: {
            cat_options: {
                options: {
//                    delimiters:['[%','%]']
                },
                layout:'test/fixtures/layout/layout_cat.html',
                expand:true,
                cwd:'test/fixtures/',
                src:['views/{,**/}*.html'],
                dest:'tmp/cat'
            },
            dog_options: {
                options: {
                    delimiters:['[%','%]']
                },
                layout:'test/fixtures/layout/layout_dog.html',
                expand:true,
                cwd:'test/fixtures/',
                src:['views/{,**/}*.html'],
                dest:'tmp/dog'
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'tiny_layout', 'nodeunit']);
//    grunt.registerTask('test', ['clean', 'tiny_layout']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
