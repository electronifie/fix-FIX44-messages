var invert = require('invert-obj');

function TradeAllocIndicator (tradeAllocIndicator) {
  this.message = tradeAllocIndicator;
}

TradeAllocIndicator.prototype.value = function () {
  return this.message;
};


TradeAllocIndicator.Keys = {
  'ALLOCATION_NOT_REQUIRED': '0',
  'ALLOCATION_REQUIRED': '1',
  'USE_ALLOCATION_PROVIDED_WITH_THE_TRADE': '2',
};

TradeAllocIndicator.Tag = '826';

TradeAllocIndicator.Type = 'INT';

TradeAllocIndicator.Values = invert(TradeAllocIndicator.Keys);

module.exports = TradeAllocIndicator;