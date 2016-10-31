var amqp = require('amqplib/callback_api');

amqp.connect('amqp://admin:xiedaming@localhost', function(err, conn){
  conn.createChannel(function(err,ch) {
    var q = 'repeater.IN';
    var msg = 'This is some data';

  //ch.assertQueue(q, {durable: false});

  //Note: on a Node 6 Buffer.from(msg) shoud be used
  ch.sendToQueue(q, new Buffer(msg));
  console.log(" [x] Send %s",msg);
  });
  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});

