var Writable      = require('stream').Writable;
var Output        = Writable({objectMode: true});
var ses           = require('node-ses');
var emailClient   = ses.createClient({
                      key     :process.env.AWS_ACCESS_KEY_ID,
                      secret  :process.env.AWS_SECRET_ACCESS_KEY});
var nztaUri       = "https://twitter.com/nztawgtn";
var messageToSend = 'A crash has occurred. ' +
                    ' Check the details: ' +
                    nztaUri;

Output._write = function (obj, enc, next) {
    console.log(obj.id, obj.text);
    if (obj.text.toLowerCase().includes("crash")) {
      emailClient.sendEmail({
        to: process.env.CRASHALERT_EMAIL_TO,
        from: process.env.CRASHALERT_EMAIL_FROM,
        subject: 'CRASH ALERT',
        message: messageToSend + ' <br> ' + obj.text,
        altText: messageToSend + obj.text
        }, function (err, data, res) {
          console.log(data);
        });
    }
    next();
};

module.exports = Output;
