var invert = require('invert-obj');

function ExchangeForPhysical (exchangeForPhysical) {
  this.message = exchangeForPhysical;
}

ExchangeForPhysical.prototype.value = function () {
  return this.message;
};


ExchangeForPhysical.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

ExchangeForPhysical.Tag = '411';

ExchangeForPhysical.Type = 'BOOLEAN';

ExchangeForPhysical.Values = invert(ExchangeForPhysical.Keys);

module.exports = ExchangeForPhysical;