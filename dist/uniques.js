"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// the best interface is the simplest
// and exporting anon function is the
// highest level we can use that to
// give the API `uniques(array)`

exports.default = function (arr) {

  // we loop over the array while
  // setting every item as the key
  // in an object and in the result
  // array on the first pass through
  var items = {},
      result = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (items[item]) continue;
      items[item] = true;
      result.push(item);
    }

    // The result array now holds the
    // unique items in the array and
    // is in the order they were found
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
};