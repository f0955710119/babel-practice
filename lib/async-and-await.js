"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var getNumberPrint = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(arr) {
    var createNumber, getSum, numberArr, sum;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            getSum = function _getSum(arr) {
              var sum = 0;

              for (var i in arr) {
                sum += +i;
              }

              return sum;
            };

            createNumber = function _createNumber(arr) {
              return new _promise["default"](function (resolve, reject) {
                resolve(arr);
              });
            };

            _context.prev = 2;
            _context.next = 5;
            return createNumber(arr);

          case 5:
            numberArr = _context.sent;
            sum = getSum(numberArr);
            console.log(sum);
            return _context.abrupt("return", sum);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            console.err(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 11]]);
  }));

  return function getNumberPrint(_x) {
    return _ref.apply(this, arguments);
  };
}();

getNumberPrint([1, 2, 3, 4]);