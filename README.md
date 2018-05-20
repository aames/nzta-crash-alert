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
`$ npm install`

`$ npm start`

## Build and run with Docker

1. First ensure your env vars are set locally.

  `env`

1. Next, substitute them in a dockerfile with `envsubst`.

  `cat Dockerfile | envsubst > DockerfileWithEnvVars`
1. Build with the substituted dockerfile.

  `docker build -f DockerfileWithEnvVars .`

1. Run the dockerfile.

  `docker run <image>`

If variable substitution worked you should see:
```
> crashalert@0.0.3 start /opt/crashalert
> node server.js

connection success https://stream.twitter.com/1.1/statuses/filter.json?follow=898926264
```
