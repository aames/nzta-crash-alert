// Crash alerter for NZTA Traffic

var _        = require('lodash');
var Output   = require('./output.js');
var Twitter  = require('./twitter.js');

Twitter.stream('statuses/filter', {
  // Note: this is the user ID - not the screen name; see http://gettwitterid.com
  follow: ['996211839888379905']
});

// Push data
Twitter.pipe(Output);
