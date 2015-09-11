var invert = require('invert-obj');

function PriceType (priceType) {
  this.message = priceType;
}

PriceType.prototype.value = function () {
  return this.message;
};


PriceType.Keys = {
  'PERCENTAGE': '1',
  'PER_UNIT': '2',
  'FIXED_AMOUNT': '3',
  'DISCOUNT_PERCENTAGE_POINTS_BELOW_PAR': '4',
  'PREMIUM_PERCENTAGE_POINTS_OVER_PAR': '5',
  'SPREAD': '6',
  'TED_PRICE': '7',
  'TED_YIELD': '8',
  'YIELD': '9',
  'FIXED_CABINET_TRADE_PRICE': '10',
  'VARIABLE_CABINET_TRADE_PRICE': '11',
};

PriceType.Tag = '423';

PriceType.Type = 'INT';

PriceType.Values = invert(PriceType.Keys);

module.exports = PriceType;