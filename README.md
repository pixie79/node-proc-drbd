# drbd.js

## Description
drbd.js is a nodejs tool to extract metrics from drbd using /proc/drbd as its source. The metrics are returned to STDOUT and can then be sent on to grahpite. Originally this is designed for use with sensu.

## Requirements
A config file is required called config.json, this contains a list of the drbd devices you want to monitor and recieve stats about. You also need a working nodejs setup with the following node modules added:
* async
* node-getopt

### Example Config

   {
   "drbdconfig": {
     "disks": "drbd0, drbd1"
     }
   }

## To use drbd.js
drbd.js takes two arguments '-s', '-m', the '-s' is optional and overrides the scheme name for the output of the metrics which is useful for graphite. The '-m' is required and sets drbd.js into metrics output mode instead of checker mode. (yet to be addd)
