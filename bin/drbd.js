#!/usr/bin/env node
"use strict";
var Getopt = require('node-getopt'), os = require('os'), fs = require('fs');

var getopt = new Getopt([
  ['c', 'config', Getopt.HAS_ARGUMENT, Getopt.SINGLE_ONLY],
  ['d', 'debug'],
  ['h', 'help'],
  ['m', 'metrics'],
  ['s', 'scheme', Getopt.HAS_ARGUMENT, Getopt.SINGLE_ONLY]
]);

var opt = getopt.parse(process.argv.slice(2)), config = 'config.json';

if (opt.options.config) {
  config = opt.options.config;
}

fs.stat(config, function (err, stats) {
  if (err) {
    err = "File not found: " + config;
    console.log(err);
    process.exit(2);
  }
});

if (opt.options.metrics) {
  var scheme = os.hostname();
  if (opt.options.scheme) {
    scheme = opt.options.scheme;
  }
  var drbdOutput = require('../lib/drbdOutput');
  drbdOutput.doit(config, function (callback) {
    var output = callback;
    output.forEach(function (item) {
      console.log(scheme + ".disk." + item);
    });
  });
}
