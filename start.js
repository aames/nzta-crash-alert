// Crash alerter for NZTA Wellington Crashes

var _        = require('lodash');
var Output   = require('./output.js');
var Twitter  = require('./twitter.js');

// Note: this is the user ID - not the screen name; see http://gettwitterid.com
const NZTA_WGTN_ID = "898926264";

Twitter.stream('statuses/filter', {
  follow: [NZTA_WGTN_ID]
});

// Push data
Twitter.pipe(Output);
