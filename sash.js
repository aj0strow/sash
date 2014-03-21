var slice = Array.prototype.slice;

module.exports = {

  identity: function (x) {
    return function () { return x; };
  },

  prop: function () {
    var keys = slice.call(arguments);
    return function (object) {
      return keys.reduce(function (object, key) {
        if (object === null || object === undefined) return undefined;
        return object[key];
      }, object);
    };
  },

  pick: function () {
    var keys = slice.call(arguments);
    return function (object) {
      return keys.reduce(function (newObject, key) {
        newObject[key] = object[key];
        return newObject;
      }, {});
    };
  },

  get squish () {
    return function (string) {
      return string.trim().replace(/\s+/, ' ');
    };
  }

};
