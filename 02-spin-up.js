var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {
// Your solution here!
  var status = new five.Led(13);
  status.on();

  var pan = new five.Servo(9);

  this.repl.inject({
    status: status,
    pan: pan
  });

  pan.to(0);

  board.wait(1000, function () {
    pan.to(180)

    board.wait(1000, function () {
      pan.to(90)
    })
  })

})