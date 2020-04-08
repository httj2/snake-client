
const net = require('net');

// * Establishes connection with the game server
// */
const connect = function() {
 const conn = net.createConnection({ 
   host: '10.0.2.15',
   port: 50541
 });
 // interpret incoming data as text
 conn.setEncoding('utf8'); 
 // allows us to recieve data from the server
 conn.on('data', (data) => {
   console.log('Server: ', data);
 });
//  "connect" event is triggered on a connection as soon as it is successfully established.
 conn.on('connect', () => {
  console.log("we are connected!" )
  conn.write("Name: JHJ");
});
 return conn;
}

module.exports = { connect };
