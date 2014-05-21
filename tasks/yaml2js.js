/*
 * grunt-yaml2js
 * https://github.com/honmaaax/grunt-yaml2js
 *
 * Copyright (c) 2014 Hitoshi Honma
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){
    grunt.registerMultiTask('yaml2js', 'Compile YAML to JS', function(){
        var options = this.data;
        // 結合したYAML読み込み
        var yaml = grunt.file.readYAML(options.src);
        //JSON文字列化
        var json = JSON.stringify(yaml);
        // エスケープ
        var escaped = json.replace(/'/g, "\\'");
        //テンプレートに置換して代入
        var script = "window." + options.namespace + "='" + escaped + "';";
        //JSファイルに書き込み
        grunt.file.write(options.dest, script);
    });
};