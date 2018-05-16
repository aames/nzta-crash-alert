// Crash alerter for NZTA Traffic

const Twitter = require('twitter');
var    _      = require('lodash');

const client = new Twitter({
  consumer_key:       process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:    process.env.TWITTER_CONSUMER_SECRET,
  access_token_key:   process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:process.env.TWITTER_ACCESS_KEY
});

const start = (callback) => {
  client.stream('statuses/filter', {track: '@wgncrashalert'}, stream => {
    stream.on('data', (tweet) => {
      console.log(`@${tweet.user.screen_name} just said something!`);
      console.log(tweet)
    });

    stream.on('error', (error) => {
      console.log(`*** STREAM ERROR :( ***'`, error);
      callback(error);
    });

    callback(undefined);
  });
};

start((err) => {
  if (err) throw err.error;
  console.log('Server running...');
});
