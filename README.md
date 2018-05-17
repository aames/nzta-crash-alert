# Crash Alert

Get an e-mail when NZTA Wellington mentions a crash.

## Why?

So I know whether to leave work or to stay in town this afternoon.

## Dependencies

* Twitter developer account (api key)
* Amazon AWS account (for SES to send e-mail)
* node (developed on 6)

## Setting up
Create a Twitter App account at [https://developer.twitter.com/en.html](https://developer.twitter.com/en.html)

Twitter API requires 4 pieces of data:
* A consumer key
* A consumer secret
* An access token
* An access key

## Running the app
The following parameters must be set as environment variables.

```
TWITTER_CONSUMER_KEY=""
TWITTER_CONSUMER_SECRET=""
TWITTER_ACCESS_TOKEN=""
TWITTER_ACCESS_KEY=""
AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""
CRASHALERT_EMAIL_FROM=""
CRASHALERT_EMAIL_TO=""
```

_Don't forget to npm install_

`$ node crashalert.js`
