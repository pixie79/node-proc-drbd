#!/usr/bin/env node

var metricCommand = require("../lib/metricCommand");

var args = process.argv.slice(0);
// shift off node and script name
args.shift(); args.shift();

new METRIC.Command(args).processInput();
