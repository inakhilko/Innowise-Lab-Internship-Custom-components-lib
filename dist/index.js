!(function (e, o) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = {};
  else if ('function' == typeof define && define.amd) define([], o);
  else {
    var f = {};
    for (var t in f) ('object' == typeof exports ? exports : e)[t] = f[t];
  }
})(self, () => ({}));
