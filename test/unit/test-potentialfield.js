var common = require('../common');
var assert  = require('assert');
var utest   = require('utest');
var sinon   = require('sinon');

var nav = require(common.root);


utest('PotentialField', {
  'testPotentialField': function() {
    var behavior1, behavior2;
    var field;
    field = new nav.PotentialField();
    behavior1 = new nav.behavior.GoalSeeking(1, 1, 1);
    assert.strictEqual(field.addBehavior(behavior1), field);
    assert.deepEqual(
      field.vectorAt(new nav.math.Vector3(2, 2, 2)),
      new nav.math.Vector3(-0.001, -0.001, -0.001));
    field = new nav.PotentialField();
    behavior1 = new nav.behavior.GoalSeeking(1, 1, 1);
    assert.strictEqual(field.addBehavior(behavior1, 5), field);
    assert.deepEqual(
      field.vectorAt(new nav.math.Vector3(2, 2, 2)),
      new nav.math.Vector3(-0.005, -0.005, -0.005));
  }
});
