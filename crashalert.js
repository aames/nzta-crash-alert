// Crash alerter for NZTA Traffic

var   Twit              = require('twit');
const commandLineArgs   = require('command-line-args');
const commandLineUsage  = require('command-line-usage');
var   cmdline           = require('./cmdline');
var   _                 = require('lodash');

const options = commandLineArgs(cmdline.optionDefinitions())
const usage = commandLineUsage(cmdline.usageDefinitions())

if (options.help) {
  console.log(usage);
} else {
  if (_.isEmpty(options)) {
    console.log(usage);
    throw new Error("No parameters given.");
  }
  //console.log(options);
  //startStream();
}

function followTweets(options){
  var T = new Twitt({
    consumer_key:         options.apikey,
    consumer_secret:      options.apisecret,
    access_token:         options.token,
    access_token_secret:  options.tokensecret
  })
  var stream = T.stream('statuses/firehose')
};
