var conf = require('./conf')
  , httpProxy = require('http-proxy');

var proxyServer = httpProxy.createServer(conf);
proxyServer.listen(80);