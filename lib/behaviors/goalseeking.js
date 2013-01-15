var math = require('./../math');

GoalSeeking = function(x, y, z, slowDist) {
  this.location = new math.Vector3(x, y, z);
  this.slowDist = slowDist;
};

GoalSeeking.prototype.vectorAt = function(loc) {
  var distance = this.location.distanceTo(loc);
  var vel = null;
  if (distance < .001) {
    vel = new math.Vector3(0, 0, 0);
  } else {
    vel = this.location.copy().subtract(loc)
    vel.setMagnitude(math.scale(distance, 0, this.slowDist));
  }
  return vel;
};

module.exports = GoalSeeking;
