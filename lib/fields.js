var math = require('./math');

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
    var behavior = this.behaviors[i].behavior;
    var scale = this.behaviors[i].scale;
    vector.add(behavior.vectorAt(loc).scale(scale));
  }
  var mag = vector.magnitude();
  if (mag > 1.0) {
    vector.normalize();
  }
  return vector;
};


PotentialField.prototype.addBehavior = function(behavior, opt_scale) {
  var scale = opt_scale || 1.0;
  this.behaviors.push({
    'behavior': behavior,
    'scale': scale
  });
  return this;
}


module.exports = PotentialField;
