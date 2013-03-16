var Vehicle = require('./vehicle').Vehicle,
  util = require('util');

//there is an implicit 'var Bike = ' in front of this
function Bike() {
  this.setWheels(2);
}

exports.Bike = Bike;

//node is kind, it gives us this:
util.inherits(Bike, Vehicle);

Bike.prototype.start = function() {
  console.log('clink');
  console.log('o   o');
  return this;
};

Bike.prototype.toString = function() {
  return this.getWheels() + ' wheeled bike';
};