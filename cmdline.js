// Set up Commmand line args and command line usage
exports.optionDefinitions = function() {
  return [
          {
            name: 'help',
            alias: 'h',
            type: Boolean,
            description: 'Display this usage guide.'
          },
          {
            name: 'apikey',
            type: String,
            multiple: true,
            description: 'The (Consumer) API key',
            typeLabel: '<api key>'
          },
          {
            name: 'apisecret',
            type: String,
            multiple: true,
            description: 'The (Consumer) API secret',
            typeLabel: '<api secret>'
          },
          {
            name: 'token',
            type: String,
            multiple: true,
            description: 'The Access token',
            typeLabel: '<access token>'
          },
          {
            name: 'tokensecret',
            type: String,
            multiple: true,
            description: 'Access token secret',
            typeLabel: '<access token secret>'
          }
        ];
};

exports.usageDefinitions = function() {
  return [
          {
            header: 'Crash Alert',
            content: 'Send an e-mail alert when NZTA Twitter mentions a crash.'
          },
          {
            header: 'Synopsis',
            content: [
              'You can either pass all parameters as arguments or set environment variables.',
              '',
              'Example using parameters:',
              '$ node crashalert.js {bold --apikey} foo_key {bold --apisecret} foo_secret {bold --token} bar_token {bold --tokensecret} bar_secret ',
            ]
          },
          {
            header: 'Options',
            optionList: exports.optionDefinitions()
          },
          {
            content: 'Project home: https://github.com/aames/nzta-crash-alert'
          }
        ];
};
