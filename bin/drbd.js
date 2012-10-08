#!/usr/bin/env node

var drbdProc = require('../lib/drbdProc');
var os = require('os');
var util = require('util');

drbdProc.doit(function(callback){
  var drbd = callback;
  console.log(drbd.drbdinfo.version);
  console.log(drbd.drbd0.state.cs);
  console.log(drbd.drbd1.state.cs);
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
