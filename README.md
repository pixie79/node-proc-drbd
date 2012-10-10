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
drbd.js takes the following arguments:
* '-s' - This is optional and set the output base name for the metrics,
* '-m' - Is if you want the metrics output,
* '-c' - This sets the name and path of the config file and is required unless the config file is in the calling directory,
