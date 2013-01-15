var common = require('../common');
var assert  = require('assert');
var utest   = require('utest');
var sinon   = require('sinon');

var nav = require(common.root);


utest('GoalSeeking', {
  'testGoalSeeking': function() {
    var behavior = new nav.behaviors.GoalSeeking(0, 0, 0, 5);
    var forceVec = behavior.vectorAt(new nav.math.Vector3(1, 0, 0));
    assert.deepEqual(forceVec, new nav.math.Vector3(-0.2, 0, 0));
    forceVec = behavior.vectorAt(new nav.math.Vector3(5, 0, 0));
    assert.deepEqual(forceVec, new nav.math.Vector3(-1, 0, 0));
    forceVec = behavior.vectorAt(new nav.math.Vector3(0, 1, 0));
    assert.deepEqual(forceVec, new nav.math.Vector3(0, -0.2, 0));
    forceVec = behavior.vectorAt(new nav.math.Vector3(10, 0, 0));
    assert.deepEqual(forceVec, new nav.math.Vector3(-1, 0, 0));
    forceVec = behavior.vectorAt(new nav.math.Vector3(10, 10, 10));
    assert.deepEqual(forceVec, new nav.math.Vector3(
        -Math.sqrt(1/3),
        -Math.sqrt(1/3),
        -Math.sqrt(1/3)));
  }
});

utest('CylinderObstacle', {
  'testCylinderObstacle': function() {
    var behavior = new nav.behaviors.CylinderObstacle(0, 0, 5, 10);
    var forceVec = behavior.vectorAt(new nav.math.Vector3(1, 0, 0));
    assert.deepEqual(forceVec, new nav.math.Vector3(1, 0, 0));
    forceVec = behavior.vectorAt(new nav.math.Vector3(5, 0, 0));
    assert.deepEqual(forceVec, new nav.math.Vector3(1, 0, 0));
    forceVec = behavior.vectorAt(new nav.math.Vector3(0, 1, 0));
    assert.deepEqual(forceVec, new nav.math.Vector3(0, 1, 0));
    forceVec = behavior.vectorAt(new nav.math.Vector3(10, 0, 0));
    assert.deepEqual(forceVec, new nav.math.Vector3(0, 0, 0));
    forceVec = behavior.vectorAt(new nav.math.Vector3(6, 0, 0));
    assert.deepEqual(forceVec, new nav.math.Vector3(0.8, 0, 0));
    forceVec = behavior.vectorAt(new nav.math.Vector3(6, 0, 6));
    var forceVec2 = behavior.vectorAt(new nav.math.Vector3(6, 0, 8));
    assert.deepEqual(forceVec, forceVec2);
    assert.deepEqual(forceVec, new nav.math.Vector3(0.8, 0, 0));
  }
});
