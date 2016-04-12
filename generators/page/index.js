'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');
var mkdirp = require('mkdirp');
var reactTpl = require('../templates/tpl-formatting/react-tpl');

var templates = require('../main/main').templates;

module.exports = yeoman.generators.Base.extend({
  prompting: function () {

  },

  _formatDefaultImporting() {
    var templateImport = "import {objName} from {moduleName};\n";
    var defaultImport = "";
    if(this.config.get('react')) {
      defaultImport += templateImport.replace(/\{objName\}/g, "React").replace(/\{moduleName\}/g, "React");
    };

    return defaultImport;
  },
  writing: {
    init: function() {

    },

    askFor: function () {
      var cb = this.async();

      var prompts = [
        {
          name: 'pageName',
          message: 'Name of Page?',
          default: 'your page',
          warning: ''
        }
      ];

      this.prompt(prompts, function (props) {
        this.pageName = props.pageName;
        cb();

      }.bind(this));
    },

    app: function () {
      if(this.config.get('react')) {
        reactTpl.createPage.bind(this)(this.pageName);
      }
      /*
      var pageSrc = 'src/page/'+this.pageName;

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
      */
    },

    end: function () {

    },

    projectfiles: function () {

    }
  },

  install: function () {

  }
});
