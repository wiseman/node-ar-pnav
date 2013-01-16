var common = require('../common');
var assert  = require('assert');
var utest   = require('utest');
var sinon   = require('sinon');

var nav = require(common.root);


utest('Vector3', {
  'testEqual': function() {
    var v1, v2;
    v1 = new nav.math.Vector3(0, 0, 0);
    v2 = new nav.math.Vector3(0, 0, 0);
    assert.deepEqual(v1, v2);
    v1.x = 1;
    assert.notDeepEqual(v1, v2);
  },

  'testCopy': function() {
    var v1, v2;
    v1 = new nav.math.Vector3(10, 10, 10);
    v2 = v1.copy();
    assert.notStrictEqual(v1, v2);
    assert.deepEqual(v1, v2);
  },

  'testMagnitude': function() {
    var v1 = new nav.math.Vector3(1, 0, 0);
    assert.strictEqual(v1.magnitude(), 1);
    v1 = new nav.math.Vector3(1, 1, 0);
    assert.strictEqual(v1.magnitude(), Math.sqrt(2));
    v1 = new nav.math.Vector3(10, 10, 10);
    assert.strictEqual(v1.magnitude(), Math.sqrt(10*10 + 10*10 + 10*10));
    v1 = new nav.math.Vector3(5, 0, 0);
    assert.strictEqual(v1.magnitude(), 5)
    v1.setMagnitude(1);
    assert.strictEqual(v1.magnitude(), 1);
    assert.deepEqual(v1, new nav.math.Vector3(1, 0, 0));
    v1 = new nav.math.Vector3(5, 5, 5);
    assert.strictEqual(v1.magnitude(), Math.sqrt(5*5 + 5*5 + 5*5));
    v1.setMagnitude(0.5);
    assert.strictEqual(v1.magnitude(), 0.5);
    assert.deepEqual(
      v1,
      new nav.math.Vector3(
        0.28867513459481287,
        0.28867513459481287,
        0.28867513459481287));
  }
});
