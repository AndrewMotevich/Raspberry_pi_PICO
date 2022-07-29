# Project with Ultrasonic Ranging Module HS-SR004 and driver L293D

I wanted to use Ultrasonic Ranging Module HS-SR004 to control DC motor.<br>
To control DC motor I used driver L293D.<br>
L293D driver can control DC motor by PWM and organize revers rotating.<br>
When distance between HS-SR004 changing the Raspberry pi pico change PWM impulse.<br>
PWM impulse is sending to L293D.<br>
That's how we control DC motor.<br>
[Link to video](https://youtu.be/G3zru8StdNQ)

***

Scheme is:<br>

![scheme](/03_URM_and_L293D/docs/Control_DC_motor.png)<br>

Picture is:<br>

![photo](/03_URM_and_L293D/docs/photo_2022-07-28_21-37-19.jpg)<br>

## Author: @AndrewMotevich