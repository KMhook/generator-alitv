'use strict';
var path = require('path');
var mkdirp = require('mkdirp');

var templates = require('../../main/main').templates;

module.exports = {
  _formatDefaultImporting() {
    var templateImport = "import {objName} from {moduleName};\n";
    var defaultImport = "";
    if(this.config.get('react')) {
      defaultImport += templateImport.replace(/\{objName\}/g, "React").replace(/\{moduleName\}/g, "React");
    };

    return defaultImport;
  },

  ask: function() {
  },

  createPage: function(pageName) {
      var pageSrc = 'src/page/'+pageName;

      mkdirp(pageSrc);

      this.template(
        this.templatePath(templates+'page/index.html'),
        this.destinationPath(pageSrc+'/index.html')
      );
      this.fs.copyTpl(
        this.templatePath(templates+'page/index.js'),
        this.destinationPath(pageSrc+'/index.js'),
        {'defaultImport': this._formatDefaultImporting()}
      );
      this.fs.copy(
        this.templatePath(templates+'page/index.less'),
        this.destinationPath(pageSrc+'/index.less')
      );
  }
};
