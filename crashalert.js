// Crash alerter for NZTA Traffic

var   Twitter           = require('twitter');
const commandLineArgs   = require('command-line-args');
const commandLineUsage  = require('command-line-usage');
var   cmdline           = require('./cmdline');
var   _                 = require('lodash');

const options = commandLineArgs(cmdline.optionDefinitions())
const usage = commandLineUsage(cmdline.usageDefinitions())

var   twitterCredentials = {}

if (options.help)
{
  console.log(usage);
}
else
{
  if (_.isEmpty(options)) {
    twitterCredentials.apikey       = process.env.TWITTER_CONSUMER_KEY;
    twitterCredentials.apisecret    = process.env.TWITTER_CONSUMER_SECRET;
    twitterCredentials.token        = process.env.TWITTER_ACCESS_TOKEN;
    twitterCredentials.tokensecret  = process.env.TWITTER_ACCESS_KEY;
    console.log(twitterCredentials);
    console.log(process.env);
  }
  else // use the command line args
  {
    twitterCredentials.apikey       = options.apikey;
    twitterCredentials.apisecret    = options.apisecret;
    twitterCredentials.token        = options.token;
    twitterCredentials.tokensecret  = options.tokensecret;
    // If that doesn't work then dump the help to console
    if ( _.isNil(twitterCredentials.apikey))
    {
      console.log(usage);
      throw new Error("No parameters given.");
    }
  }
}

function followTweets(options){
  var T = new Twitt({
    consumer_key:         options.apikey,
    consumer_secret:      options.apisecret,
    access_token:         options.token,
    access_token_secret:  options.tokensecret
  })
  //var stream = T.stream('statuses/filter', {track: })
  //stream.on()
};
