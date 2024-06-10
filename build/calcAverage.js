"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const calcAverage = grades => {
  let sum = 0;
  grades.forEach(grade => {
    sum += grade.score;
  });
  const average = (sum / grades.length).toFixed(2);
  return +average;
};
var _default = exports.default = calcAverage;