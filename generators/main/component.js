'use strict';
var templates = require('./main').templates;
var mkdirp = require('mkdirp');

module.exports = {
  ask: function() {
    var cb = this.async();

    cb();
  },

  make: function() {
    this.template(
      this.templatePath(templates+'component'),
      this.destinationPath('src/component')
    );
  },

  create: function() {
    mkdirp('src/component');
    //this.fs.copy(
    //  this.templatePath(templates+'component'),
    //  this.destinationPath('src/component')
    //);
  }
};
