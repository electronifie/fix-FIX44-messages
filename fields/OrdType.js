var invert = require('invert-obj');

function OrdType (ordType) {
  this.message = ordType;
}

OrdType.prototype.value = function () {
  return this.message;
};


OrdType.Keys = {
  'MARKET': '1',
  'LIMIT': '2',
  'STOP': '3',
  'STOP_LIMIT': '4',
  'WITH_OR_WITHOUT': '6',
  'LIMIT_OR_BETTER': '7',
  'LIMIT_WITH_OR_WITHOUT': '8',
  'ON_BASIS': '9',
  'PREVIOUSLY_QUOTED': 'D',
  'PREVIOUSLY_INDICATED': 'E',
  'FOREX': 'G',
  'FUNARI': 'I',
  'MARKET_IF_TOUCHED': 'J',
  'MARKET_WITH_LEFTOVER_AS_LIMIT': 'K',
  'PREVIOUS_FUND_VALUATION_POINT': 'L',
  'NEXT_FUND_VALUATION_POINT': 'M',
  'PEGGED': 'P',
};

OrdType.Tag = '40';

OrdType.Type = 'CHAR';

OrdType.Values = invert(OrdType.Keys);

module.exports = OrdType;