const serverAMP = require('./servers/amp');
const ips = require('./helpers/ip')();

async function run() {
  const amp = await serverAMP(4444);

  ips.forEach( ip => {
    console.log( `service running in http://${ip}:${amp.port}`);
  });
}
run()
