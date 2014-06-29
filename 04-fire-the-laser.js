var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function () {
// Your solution here!
  var status = new five.Led(13);
  status.on();

  var pan = new five.Servo(9);
  pan.sweep();

  var tilt = new five.Servo(10);
  tilt.sweep();

  var laser = new five.Led(11);
  laser.strobe(500);

  this.repl.inject({
    status: status,
    pan: pan,
    tilt: tilt,
    laser: laser
  });

  board.wait(3000, function () {
    pan.stop();
    pan.center();
    laser.off();

    tilt.stop();
    tilt.center();
  });

});