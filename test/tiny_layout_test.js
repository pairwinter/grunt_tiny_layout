'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.tiny_layout = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  cat_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/cat/test/fixtures/views/content.html');
    var expected = grunt.file.read('test/expected/cat/test/fixtures/views/content.html');
    test.equal(actual, expected, 'should describe what the cat_options behavior is.');

    test.done();
  },
  dog_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/dog/test/fixtures/views/content.html');
    var expected = grunt.file.read('test/expected/dog/test/fixtures/views/content.html');
    test.equal(actual, expected, 'should describe what the dog_options behavior is.');

    test.done();
  }
};
