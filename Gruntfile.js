/*
 * grunt-yaml2js
 * https://github.com/honmaaax/grunt-yaml2js
 *
 * Copyright (c) 2014 Hitoshi Honma
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){
    grunt.initConfig({
        yaml2js: {
            dist: {
                src: "./test/test.yaml",
                dest: "./test/test.js",
                namespace: "testing"
            }
        }
    });

    grunt.loadTasks('tasks');
};