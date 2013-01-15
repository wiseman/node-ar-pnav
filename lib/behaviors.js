var math = require('./math');


GoalSeeking = function(x, y, z, opt_slowDist) {
  this.location = new math.Vector3(x, y, z);
  this.slowDist = opt_slowDist || 1000;
};

GoalSeeking.prototype.vectorAt = function(loc) {
  var distance = this.location.distanceTo(loc);
  var force = null;
  if (distance < .001) {
    force = new math.Vector3(0, 0, 0);
  } else {
    force = this.location.copy().subtract(loc)
    force.setMagnitude(0.5 * math.scale(distance, 0, this.slowDist));
  }
  return force;
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
  var force = null;
  if (distance < .001) {
    force = new math.Vector3(1, 0, 0);
  } else {
    force = loc.copy().subtract(this.location);
    force.z = 0;
    force.setMagnitude(1.0 - math.scale(distance, this.minDist, this.cutoffDist));
  }
  return force;
};


module.exports.GoalSeeking = GoalSeeking;
module.exports.CylinderObstacle = CylinderObstacle;
