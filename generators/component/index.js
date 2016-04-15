'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var mkdirp = require('mkdirp');

var templates = require('../main/main').templates;

module.exports = yeoman.generators.Base.extend({
  _defaultSupport: function() {

  },
  _reduxSupport: function(path) {
    this.log('generating redux support dirs ...');
    mkdirp(path + 'actions');
    mkdirp(path + 'views');
    mkdirp(path + 'containers');
    mkdirp(path + 'reducers');
    mkdirp(path + 'test');
  },

  prompting: function () {

  },

  writing: {
    init: function() {

    },

    askFor: function () {
      var cb = this.async();

      var prompts = [
        {
          name: 'componentName',
          message: 'Name of component?',
          default: 'yourComponent',
          warning: ''
        }
      ];

      this.prompt(prompts, function (props) {
        this.componentName = props.componentName;
        cb();

      }.bind(this));
    },

    app: function () {
      var componentSrc = 'src/component/'+this.componentName + '/';

      mkdirp(componentSrc);

      this.template(
        this.templatePath(templates+'component/index.js'),
        this.destinationPath(componentSrc+'index.js')
      );

      this.template(
        this.templatePath(templates+'component/index.less'),
        this.destinationPath(componentSrc+'index.less')
      );

      if(this.config.get('reactWithRedux')) {
        this._reduxSupport(componentSrc);
      }
    },

    end: function () {

    },

    projectfiles: function () {

    }
  },

  install: function () {

  }
});
