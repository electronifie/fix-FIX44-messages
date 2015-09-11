var invert = require('invert-obj');

function LastCapacity (lastCapacity) {
  this.message = lastCapacity;
}

LastCapacity.prototype.value = function () {
  return this.message;
};


LastCapacity.Keys = {
  'AGENT': '1',
  'CROSS_AS_AGENT': '2',
  'CROSS_AS_PRINCIPAL': '3',
  'PRINCIPAL': '4',
  'RISKLESS_PRINCIPAL': '5',
  'CROSS AS RISKLESS PRINCIPAL': '6',
  'CROSS AS AGENT ALLOCATION': '7',
};

LastCapacity.Tag = '29';

LastCapacity.Type = 'CHAR';

LastCapacity.Values = invert(LastCapacity.Keys);

module.exports = LastCapacity;