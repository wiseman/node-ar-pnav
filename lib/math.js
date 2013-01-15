Vector3 = function(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
};

Vector3.prototype.equal = function(v) {
  return this.x === v.x && this.y === v.y && this.z === v.z;
}

Vector3.prototype.copy = function() {
  return new Vector3(this.x, this.y, this.z);
};

Vector3.prototype.magnitude = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
};

Vector3.prototype.setMagnitude = function(magnitude) {
  this.normalize().scale(magnitude / this.magnitude());
  return this;
};

Vector3.prototype.normalize = function() {
  var magnitude = this.magnitude();
  this.x = this.x / magnitude;
  this.y = this.y / magnitude;
  this.z = this.z / magnitude;
  return this;
};

Vector3.prototype.scale = function(s) {
  this.x = this.x * s;
  this.y = this.y * s;
  this.z = this.z * s;
  return this;
};

Vector3.prototype.add = function(vector) {
  this.x += vector.x;
  this.y += vector.y;
  this.z += vector.z;
  return this;
};

Vector3.prototype.subtract = function(vector) {
  this.x -= vector.x;
  this.y -= vector.y;
  this.z -= vector.z;
  return this;
};


Vector3.prototype.distanceTo = function(vector) {
  var dx = this.x - vector.x;
  var dy = this.y - vector.y;
  var dz = this.z - vector.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
};


var scale = function(x, min, max) {
  var v = (x - min) / (max - min);
  return Math.min(1, Math.max(0, v));
};


module.exports.Vector3 = Vector3;
module.exports.scale = scale;
