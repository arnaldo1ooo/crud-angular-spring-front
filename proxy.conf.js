const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8180/',
    secure: false, //False por que no usa SSL
    loglevel: 'debug'
  }
];

module.exports = PROXY_CONFIG
