"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var arr = [1, 2, 3, 4];
var numberString = (0, _map["default"])(arr).call(arr, function (number) {
  return "Number is ".concat(number);
});
var hasNumber = (0, _includes["default"])(arr).call(arr, 2);