#!/usr/bin/env node

var drbdProc = require('../lib/drbdProc');
var os = require('os');

drbdProc.read(function(callback){
  var data = callback;
  i = 0;
  while (i < data.length) {
    console.log(JSON.parse(data[i]));
    i ++;
    }
output();
});



function output(){
  var prefix = new String;
  var prefixHost = new String;
  prefixHost = os.hostname();
  prefixHost = prefixHost.split('.');
  prefix = "australia.";
  prefix = prefix.concat(prefixHost[0]);
  console.log(prefix);
}
