var mergeDescriptors = require('merge-descriptors');
var slice = Array.prototype.slice;

var methods = {

  identity: function (input) {
    return compose(this, function () { return input; });
  },

  prop: function () {
    var keys = slice.call(arguments);
    return compose(this, function (input) {
      return keys.reduce(function (object, key) {
        if (object === null || object === undefined) return undefined;
        return object[key];
      }, input);
    });
  },

  pick: function () {
    var keys = slice.call(arguments);
    return compose(this, function (input) {
      return keys.reduce(function (object, key) {
        object[key] = input[key];
        return object;
      }, {});
    });
  },

  omit: function () {
    var omitted = slice.call(arguments).reduce(function (object, key) {
      object[key] = true;
      return object;
    }, {});
    return compose(this, function (input) {
      return Object.keys(input).reduce(function (object, key) {
        if (! omitted[key]) object[key] = input[key];
        return object;
      }, {});
    });
  },

  get squish () {
    return compose(this, function (string) {
      return string.trim().replace(/\s+/, ' ');
    });
  }

};

function compose (prev, next) {
  return sash(function (input) { return next(prev(input)); });
}

function sash (func) {
  return mergeDescriptors(func.bind(func), methods);
}

function noop (x) { return x; }
module.exports = sash(noop);
