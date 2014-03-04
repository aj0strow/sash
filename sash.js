module.exports = {

  identity: function (x) {
    return x;
  },

  prop: function (key) {
    return function (object) {
      if (object === null || object === undefined) return undefined;
      return object[key];
    };
  }

};