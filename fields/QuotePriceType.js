var invert = require('invert-obj');

function QuotePriceType (quotePriceType) {
  this.message = quotePriceType;
}

QuotePriceType.prototype.value = function () {
  return this.message;
};


QuotePriceType.Keys = {
  'PERCENT': '1',
  'PER_SHARE': '2',
  'FIXED_AMOUNT': '3',
  'DISCOUNT_PERCENTAGE_POINTS_BELOW_PAR': '4',
  'PREMIUM_PERCENTAGE_POINTS_OVER_PAR': '5',
  'BASIS_POINTS_RELATIVE_TO_BENCHMARK': '6',
  'TED_PRICE': '7',
  'TED_YIELD': '8',
  'YIELD_SPREAD': '9',
  'YIELD': '10',
};

QuotePriceType.Tag = '692';

QuotePriceType.Type = 'INT';

QuotePriceType.Values = invert(QuotePriceType.Keys);

module.exports = QuotePriceType;