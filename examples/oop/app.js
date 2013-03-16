var util = require('util'),
  Vehicle = require('./vehicle').Vehicle,
  Bike = require('./bike').Bike;

var car = new Vehicle('porsche');
car.start();

var boat = new Vehicle('boat');
boat.setWheels(0);
boat.name = 'Christy';
// a "monkey-patch" on bike
boat.underCarriage = function() {
  return '\\_____|';
};
boat.start();

var bike = new Bike();
console.log("bike: " + util.inspect(bike));
console.log(bike.start().toString());
bike.setWheels(-1);