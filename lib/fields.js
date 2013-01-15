var math = require('./math');

/**
 * @constructor
 * @interface
 */
Behavior = function() {};
Behavior.prototype.vectorAt = function(loc) {};


PotentialField = function() {
  this.behaviors = [];
};


/**
 * Computes the vector value of the field as a particular position.
 * @param {number} x X coordinate.
 * @param {number} y Y coordinate.
 * @param {number} z Z coordinate.
 * @return {math.Vector3} The vector value.
 */
PotentialField.prototype.vectorAt = function(loc) {
  var vector = new math.Vector3();
  for (var i = 0; i < this.behaviors.length; i++) {
    vector.add(this.behaviors[i].vectorAt(loc));
  }
  var mag = vector.magnitude();
  if (mag > 1.0) {
    vector.normalize();
  }
  return vector;
};


PotentialField.prototype.addBehavior = function(behavior) {
  this.behaviors.push(behavior);
  return this;
}


