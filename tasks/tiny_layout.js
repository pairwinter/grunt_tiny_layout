/*
 * grunt_tiny_layout
 * https://github.com/pairwinter/grunt_tiny_layout
 *
 * Copyright (c) 2014 DongDong Liu
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path');
var _ = require('underscore');

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('tiny_layout', 'tiny layout running', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({

        });
        if(options.delimiters){
            grunt.template.addDelimiters('tiny_layout_delimiters',options.delimiters[0],options.delimiters[1]);
        }

        // Iterate over all specified file groups.
        this.files.forEach(function (f) {
            var layoutFilePath = f.layout;
            var layoutFileContent = grunt.file.read(layoutFilePath);
            // Concat specified files.
            var srcFilePaths = f.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            });
            _.forEach(srcFilePaths,function(srcFilePath){
                var srcFileContent = grunt.file.read(srcFilePath);
                var mergeResult = grunt.template.process(layoutFileContent,{data:{body:srcFileContent},delimiters:'tiny_layout_delimiters'});
                var relativeSrcFilePath = f.orig.expand?path.relative(f.orig.cwd||'',srcFilePath):srcFilePath;
                var destPath = f.orig.dest + path.sep + relativeSrcFilePath;
                grunt.file.write(destPath, mergeResult);
            });

            // Print a success message.
            grunt.log.writeln('File "' + f.orig.dest + '" created.');
        });
    });

};
