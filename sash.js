var slice = Array.prototype.slice;

module.exports = {

  identity: function (x) {
    return x;
  },

  prop: function () {
    var keys = slice.call(arguments);
    return function (object) {
      return keys.reduce(function (object, key) {
        if (object === null || object === undefined) return undefined;
        return object[key];
      }, object);
    };
  }

};