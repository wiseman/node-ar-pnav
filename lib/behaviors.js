var math = require('./math');


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


CylinderObstacle = function(x, y, opt_minDist, opt_cutoffDist) {
  this.minDist = opt_minDist || 300;
  this.cutoffDist = opt_cutoffDist || 1000;
  this.location = new math.Vector3(x, y);
};

CylinderObstacle.prototype.vectorAt = function(loc) {
  var loc = loc.copy();
  loc.z = 0;
  var distance = this.location.distanceTo(loc);
  var vel = loc.copy().subtract(this.location);
  vel.z = 0;
  vel.setMagnitude(1.0 - math.scale(distance, this.minDist, this.cutoffDist));
  return vel;
};


module.exports.GoalSeeking = GoalSeeking;
module.exports.CylinderObstacle = CylinderObstacle;
