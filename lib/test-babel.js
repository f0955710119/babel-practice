"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var arr = [1, 2, 3, 4];

var getNumberPrint = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(arr) {
    var createNumber, getSum, numberArr, sum;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            getSum = function _getSum(arr) {
              var sum = arr.reduce(function (acc, cur) {
                return acc += cur;
              }, 0);
              return sum;
            };

            createNumber = function _createNumber(arr) {
              return new Promise(function (resolve, reject) {
                resolve(arr);
              });
            };

            _context.next = 4;
            return createNumber(arr);

          case 4:
            numberArr = _context.sent;
            sum = getSum(numberArr);
            console.log(sum);
            return _context.abrupt("return", sum);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getNumberPrint(_x) {
    return _ref.apply(this, arguments);
  };
}();

getNumberPrint([1, 2, 3, 4]);