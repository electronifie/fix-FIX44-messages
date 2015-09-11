var invert = require('invert-obj');

function BenchmarkCurveName (benchmarkCurveName) {
  this.message = benchmarkCurveName;
}

BenchmarkCurveName.prototype.value = function () {
  return this.message;
};

BenchmarkCurveName.Tag = '221';

BenchmarkCurveName.Type = 'STRING';

module.exports = BenchmarkCurveName;