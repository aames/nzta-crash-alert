var Writable  = require('stream').Writable;

var Output    = Writable({objectMode: true});

Output._write = function (obj, enc, next) {
    console.log(obj.id, obj.text);
    next();
};

module.exports = Output;
