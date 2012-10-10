#!/usr/bin/env node
"use strict";
var Getopt = require('node-getopt');
var os = require('os');

var getopt = new Getopt([
  ['d', 'debug'],
  ['h', 'help'],
  ['m', 'metrics'],
  ['s', 'scheme', Getopt.HAS_ARGUMENT, Getopt.SINGLE_ONLY]
]);

var opt = getopt.parse(process.argv.slice(2));

if (opt.options.metrics) {
  var scheme = os.hostname();
  if (opt.options.scheme) {
    scheme = opt.options.scheme;
  }
  var drbdOutput = require('../lib/drbdOutput');
  drbdOutput.doit(function (callback) {
    var output = callback;
    output.forEach(function (item) {
      console.log(scheme + ".disk." + item);
    });
  });
}
