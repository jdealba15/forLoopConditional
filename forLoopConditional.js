const motors = [
  {
    name: 'Motor',
    type: 'DC motor',
    voltage: 12,
    current: 2.5,
    speed: 5000,
    torque: 10,
    power_in_watts: 30,
    weight: 0.5,
    manufacturer: 'ABC Motors Ltd.'
  },
  {
    name: 'Motor 1',
    type: 'AC motor',
    voltage: 230,
    current: 5,
    speed: 1750,
    torque: 20,
    power_in_watts: 2500,
    weight: 10,
    manufacturer: 'ABC Motors Ltd.'
  },
  {
    name: 'Motor 2',
    type: 'DC motor',
    voltage: 24,
    current: 10,
    speed: 3000,
    torque: 15,
    power_in_watts: 600,
    weight: 2.5,
    manufacturer: 'DEF Motors Inc.'
  },
  {
    name: 'Motor 3',
    type: 'AC motor',
    voltage: 480,
    current: 3.2,
    speed: 3600,
    torque: 5,
    power_in_watts: 2500,
    weight: 15,
    manufacturer: 'GHI Motors Corp.'
  },
  {
    name: 'Motor 4',
    type: 'DC motor',
    voltage: 12,
    current: 1.5,
    speed: 5000,
    torque: 7.5,
    power_in_watts: 18,
    weight: 0.8,
    manufacturer: 'JKL Motors Ltd.'
  },
];


//iterating through the array
for(let i = 0; i < motors.length; i++){
  //object bracket notation to check name property/key
  if(motors[i].name === "Motor 1"){
    //access the key power_in_watts
    motors[i].power_in_watts = 2000;
  }
}