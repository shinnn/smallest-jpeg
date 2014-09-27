'use strict';

var fs = require('fs');

var test = require('tape');
var smallestJpegBuffer = require('require-main')();

test('smallestJpegBuffer()', function(t) {
  t.plan(1);

  t.deepEqual(
    smallestJpegBuffer(),
    fs.readFileSync('test/fixture.jpg'),
    'should create a buffer of smallest JPEG.'
  );
});
