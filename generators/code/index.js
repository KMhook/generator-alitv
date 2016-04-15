'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var mkdirp = require('mkdirp');

var FileTypes = {
  javascript: 'javascript',
  html: 'html',
  less: 'less',
  css: 'css'
};

function hello() {
}

module.exports = yeoman.generators.Base.extend({
  _questions: [
    {
      name: 'fileType',
      message: 'chose a file type',
      type: 'list',
      choices: ['javascript', 'html', 'less', 'css'],
    },
    {
      when: function(answer) {
        return answer.fileType === FileTypes.javascript;
      },
      name: 'javascriptFileSubtype',
      message: 'select the subtype file you want to create',
      choices: ['blank', 'reactWithRedux'],
      type: 'list'
    },
    {
      when: function(answer) {
        return answer.javascriptFileSubtype === 'reactWithRedux';
      },
      name: 'reactWithReduxFileSubtype',
      message: 'less',
      type: 'list',
      choices: ['reducer', 'container', 'action', 'view']
    }
  ],
  initializing: function() {

  },
  prompting: function () {
    var done = this.async();
    this.prompt(this._questions, function(answer){
      this.log(JSON.stringify(answer));
    }.bind(this))
  },
  configuring: function() {

  },
  writing: function() {

  }
});
