var util = require('util'),
  _defaultWheels = 4;

function Vehicle(name) {
  this.name = name;
  return this;
}

exports.Vehicle = Vehicle;

Vehicle.prototype.setWheels = function(n) {
  if (typeof n !== 'number' || n < 0) throw TypeError('n must be a positive number');
  this._wheels = n;
};

Vehicle.prototype.getWheels = function() {
  return this._wheels === undefined ? _defaultWheels : this._wheels;
};

Vehicle.prototype.start = function() {
  console.log("vrooom " + this.name);
  console.log(this.underCarriage());
};

Vehicle.prototype.underCarriage = function() {
  var w = '';
  for (var i = 0; i < this.getWheels(); i++) {
    w += '0';
  }
  return w;
};