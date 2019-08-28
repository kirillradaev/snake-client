const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.151',
    port: 50541
    
  });
  conn.on('data', (data) => {
    console.log('Successfully connected to game server')
  });
  conn.write('Name: GOD')
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
}

// console.log('Connecting ...');
// connect();

module.exports = connect;