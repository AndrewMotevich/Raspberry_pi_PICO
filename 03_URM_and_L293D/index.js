/** @format */
const CLOCKWISE = 12; //Clockwise pin
const COUNTERCLOCKWISE = 13; //Counterclockwise pin
const BUTTON = 14;
const PWM_PIN = 15; //PWM pin
const ECHO_PIN = 16; //Echo pin
const TRIG_PIN = 17; //Trig pin

const { PWM } = require("pwm");
// const { Button } = require('button');

pinMode(TRIG_PIN, OUTPUT);
pinMode(CLOCKWISE, OUTPUT);
pinMode(COUNTERCLOCKWISE, OUTPUT);
pinMode(ECHO_PIN, INPUT);
pinMode(BUTTON, INPUT);

digitalWrite(CLOCKWISE, HIGH);
digitalWrite(COUNTERCLOCKWISE, LOW);

//a function that shows, counts and returns distance
function showDistance() {
  let pulse = pulseRead(ECHO_PIN, 1, {
    mode: INPUT,
    startState: HIGH,
    trigger: {
      pin: TRIG_PIN,
      startState: LOW,
      interval: [5, 10],
    },
  });
  let distance = Math.floor((pulse[0] * 0.34) / 20, -1);
  console.log(distance, "cm.");
  return distance;
}

const pwm = new PWM(PWM_PIN, 1000, 1); // Create the PWM instance
pwm.start();

//Read distance and change speed of the DC motor
let i = 0;
while (i < 1) {
  let duty;
  let distance = showDistance();
  duty = distance / 10;
  pwm.setDuty(duty);
  if (digitalRead(BUTTON) === 1) {
    pwm.stop();
    delay(1000);
    digitalToggle(CLOCKWISE);
    digitalToggle(COUNTERCLOCKWISE);
    pwm.start();
  }
  delay(1000);
}
