var invert = require('invert-obj');

function BidTradeType (bidTradeType) {
  this.message = bidTradeType;
}

BidTradeType.prototype.value = function () {
  return this.message;
};


BidTradeType.Keys = {
  'RISK_TRADE': 'R',
  'VWAP_GUARANTEE': 'G',
  'AGENCY': 'A',
  'GUARANTEED_CLOSE': 'J',
};

BidTradeType.Tag = '418';

BidTradeType.Type = 'CHAR';

BidTradeType.Values = invert(BidTradeType.Keys);

module.exports = BidTradeType;