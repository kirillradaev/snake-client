const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.151',
    port: 50541
    
  });
  conn.on('data', (data) => {
    console.log('Successfully connected to game server')
  });
  conn.on('connect', () => {
    conn.write('Name: KVR');
  });
  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });
  // conn.on('connect', () => {
  //   setInterval(function(){
  //   conn.write('Move: left')}, 50);
  // });

  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
}

module.exports = connect;

