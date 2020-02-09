module.exports = function () {
  var interfaces = require('os').networkInterfaces();
  function firstLocalIface () {
    for (var devName in interfaces) {
      var iface = interfaces[devName];
      for (var i = 0; i < iface.length; i++) {
        var alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
          return alias.address;
      }
    }
    return false;
  }
  let result = firstLocalIface() ? [firstLocalIface()] : [];
  result.push('127.0.0.1')
  return result;
}