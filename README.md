# Crash Alert

Get an e-mail when NZTA Wellington mentions a crash.

## Why?

So I know whether to leave work or to stay in town this afternoon.

## Dependencies

* Twitter developer account (api key)
* Amazon AWS account (for SES to send e-mail)
* node

## Setting up
Create a Twitter App account at [https://developer.twitter.com/en.html](https://developer.twitter.com/en.html)

Twitter API requires 4 pieces of data:
* A consumer key
* A consumer secret
* An access token
* An access key

# Running the app
The parameters can either be fed in as command line arguments or set as environment variables.

If you are setting environment variables, ensure you `source` your environment variables correctly so they are visible in all sessions.

If you want to pass parameters then do as follows:
```
$ node crashalert.js --apikey <TWITTER_CONSUMER_KEY> --apisecret <TWITTER_CONSUMER_SECRET> --token
  <TWITTER_ACCESS_TOKEN> --tokensecret <TWITTER_ACCESS_KEY>
```
