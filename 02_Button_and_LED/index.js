pinMode(13, OUTPUT);

var pin = 16; // Pin to watch
pinMode(pin, INPUT_PULLDOWN); // Set the pin mode to INPUT_PULLDOWN.
var id = setWatch(
  function () {
    digitalToggle(13); // Print out the 'click' to the terminal.
  },
  pin,
  RISING,
  10
);