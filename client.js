const net = require('net');
// const setupInput = require('./play')
const { IP, PORT } = require('./constants');


// * Establishes connection with the game server
// */
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // allows us to recieve data from the server
  conn.on('data', (data) => {
    console.log('Server: ', data);
  });
  //  "connect" event is triggered on a connection as soon as it is successfully established.
  conn.on('connect', () => {
    console.log("we are connected!");
    conn.write("Name: JHJ");
  });
  conn.on('connect', () => {
    conn.write("Say: Do you like pizza?");
  });
  return conn;
};


module.exports = { connect };
