var TwitterStream = require('twitter-stream-api');

var keys = {
  consumer_key:       process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:    process.env.TWITTER_CONSUMER_SECRET,
  token:              process.env.TWITTER_ACCESS_TOKEN,
  token_secret:       process.env.TWITTER_ACCESS_KEY
};

var Twitter = new TwitterStream(keys);

// Log info and error cases to console (as per API doc)
Twitter.on('data error', function (error) {
    console.log('data error', error);
});
Twitter.on('data keep-alive', function () {
    console.log('data keep-alive');
});

Twitter.on('connection error unknown', function (error) {
    console.log('connection error unknown', error);
    Twitter.close();
});
Twitter.on('connection rate limit', function (httpStatusCode) {
    console.log('connection rate limit', httpStatusCode);
});
Twitter.on('connection error http', function (httpStatusCode) {
    console.log('connection error http', httpStatusCode);
});
Twitter.on('connection error stall', function () {
    console.log('connection error stall');
});
Twitter.on('connection error network', function (error) {
    console.log('connection error network', error);
});
Twitter.on('connection aborted', function () {
    console.log('connection aborted');
});
Twitter.on('connection success', function (uri) {
    console.log('connection success', uri);
});

module.exports = Twitter;

// Debug heavy 
// Twitter.on('data', function (obj) {
//     console.log('data', obj);
// });
