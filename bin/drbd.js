#!/usr/bin/env node
var optparse = require('optparse');

var SWITCHES = [
  ['-d', '--debug', 'Enables debug mode'],
  ['-h', '--help', 'Shows this help section'],
  ['-m', '--metrics', 'Output Metrics'],
  ['-s', '--scheme', 'Metrics Naming Scheme']
  ];

var parser = new optparse.OptionParser(SWITCHES), print_summary = true,
  first_arg;
parser.banner = 'Usage: drbd.js [options]';

var options = {
  debug: false,
  scheme: ''
};

parser.on(0, function(value) {
  first_arg = value;
});

parser.on('debug', function() {
  options.debug = true;
});

parser.on('help', function() {
  console.log(parser.toString());
  print_summary = false;
});

parser.on('scheme', function(value) {
  options.scheme = value;
  console.log("Scheme name set to: " + option.scheme)
});

parser.on('metrics', function() {
  console.log("printing metrics");
  var drbdOutput = require('../lib/drbdOutput');
  drbdOutput.doit(function(callback){
    console.log(callback);
  });
});

parser.parse(process.ARGV);

if (print_summary) {
  console.log("First non-switch argument is: " + first_arg);
  console.log("Debug mode is set to: " + options.debug);
  console.log("Scheme is set to: " + options.scheme);
}
