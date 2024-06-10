"use strict";

var _studentGrades = _interopRequireDefault(require("./studentGrades"));
var _calcAverage = _interopRequireDefault(require("./calcAverage"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
console.log((0, _calcAverage.default)(_studentGrades.default));