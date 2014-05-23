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
        var _options = this.data;
        // 結合したYAML読み込み
        var _yaml = grunt.file.readYAML(_options.src);
        //JSON文字列化
        var _json = JSON.stringify(_yaml);
        // エスケープ＆テンプレートに置換して代入
        var _escaped, _script;
        if( _options.namespace ){
            _escaped = _json.replace(/'/g, "\\'");
            _script = _options.namespace + "='" + _escaped + "';";
        } else {
            _escaped = _json.replace(/\)/g, "\\)");
            _script = "define(" + _escaped + ");";
        }
        //JSファイルに書き込み
        grunt.file.write(_options.dest, _script);
    });
};