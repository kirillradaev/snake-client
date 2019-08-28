const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
    
  });
  conn.on('data', (data) => {
    console.log('Successfully connected to game server')
  });
  conn.on('connect', () => {
    conn.write('Name: KVR');
  });
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
}

module.exports = connect;

