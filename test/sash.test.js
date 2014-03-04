describe('Sash', function () {

  describe('.identity', function () {
    var object = {};

    it('should return whats passed in', function () {
      assert.equal(object, sash.identity(object));
    });
  });

  describe('.prop', function () {
    var object = { a: 1, b: { c: [ 2 ] } };

    it('should return undefined if object null', function () {
      var fn = sash.prop('x');
      assert.equal(undefined, fn(null));
      assert.equal(undefined, fn(undefined));
    });

    it('should return the property', function () {
      var fn = sash.prop('a');
      assert.equal(1, fn(object));
    });

    it('should propagate undefined', function () {
      var fn = sash.prop('fail', 'again');
      assert.equal(undefined, fn(object));
    });

    it('should follow multiple arguments', function () {
      var query = sash.prop('b', 'c', 0);
      assert.equal(2, query(object));
    });
  });

});
