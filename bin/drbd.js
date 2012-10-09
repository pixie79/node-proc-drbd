#!/usr/bin/env node

//var drbdProc = require('../lib/drbdProc');
//var util = require('util');

/*
drbdProc.doit(function(callback){
  var drbd = callback;
  console.log(drbd);
}); 
*/

var drbdOutput = require('../lib/drbdOutput');

drbdOutput.doit(function(callback){
  console.log(callback);
});
