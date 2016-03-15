'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');
var mkdirp = require('mkdirp');

var templates = require('../main/main').templates;

module.exports = yeoman.generators.Base.extend({
  prompting: function () {

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
      var pageSrc = 'src/page/'+this.pageName;

      mkdirp(pageSrc);

      this.template(
        this.templatePath(templates+'page/index.html'),
        this.destinationPath(pageSrc+'/index.html')
      );
      this.fs.copy(
        this.templatePath(templates+'page/index.js'),
        this.destinationPath(pageSrc+'/index.js')
      );
      this.fs.copy(
        this.templatePath(templates+'page/index.less'),
        this.destinationPath(pageSrc+'/index.less')
      );
    },

    end: function () {

    },

    projectfiles: function () {

    }
  },

  install: function () {

  }
});
