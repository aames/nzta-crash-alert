// Crash alerter for NZTA Traffic

var   Twit            = require('twit')
const commandLineArgs = require('command-line-args')
const commandLineUsage= require('command-line-usage')
var   cmdline         = require('./cmdline')


const options = commandLineArgs(cmdline.optionDefinitions())

if (options.help) {
  const usage = commandLineUsage(cmdline.usageDefinitions())
  console.log(usage)
} else {
  console.log(options)
}
