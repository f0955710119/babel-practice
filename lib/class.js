"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

require("core-js/modules/es6.function.name.js");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var Dog = /*#__PURE__*/function () {
  function Dog(name, color) {
    (0, _classCallCheck2["default"])(this, Dog);
    this.name = name;
    this.color = color;
  }

  (0, _createClass2["default"])(Dog, [{
    key: "name",
    get: function get() {
      return this.name;
    }
  }]);
  return Dog;
}();

var dog = new Dog("Pete", "white");
console.log(dog.name());