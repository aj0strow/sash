describe('Sash', function () {

  describe('.identity', function () {
    var object = {};

    it('should return whats passed in', function () {
      assert.equal(object, sash.identity(object));
    });
  });

  describe('.property', function () {
    var object = { a: 1 };
    var fn = sash.prop('a');

    it('should return undefined if object null', function () {
      assert.equal(undefined, fn(null));
      assert.equal(undefined, fn(undefined));
    });

    it('should return the property', function () {
      assert.equal(1, fn(object));
    });
  });

});
