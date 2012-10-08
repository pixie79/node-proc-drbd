#!/usr/bin/env node

var drbdProc = require('../lib/drbdProc');
var os = require('os');
var util = require('util');

drbdProc.doit(function(callback){
  var data = callback;
  console.log(data);
}); 
/*

function output(){
  var prefix = new String;
  var prefixHost = new String;
  prefixHost = os.hostname();
  prefixHost = prefixHost.split('.');
  prefix = "australia.";
  prefix = prefix.concat(prefixHost[0]);
  console.log(prefix);
}

*/
