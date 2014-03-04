describe('Sash', function () {

  describe('.identity', function () {
    it('should return whats passed in', function () {
      var object = {};
      assert.equal(object, sash.identity(object));
    });
  });

});
