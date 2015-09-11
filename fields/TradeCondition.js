var invert = require('invert-obj');

function TradeCondition (tradeCondition) {
  this.message = tradeCondition;
}

TradeCondition.prototype.value = function () {
  return this.message;
};


TradeCondition.Keys = {
  'CASH': 'A',
  'AVERAGE_PRICE_TRADE': 'B',
  'CASH_TRADE': 'C',
  'NEXT_DAY': 'D',
  'OPENING': 'E',
  'INTRADAY_TRADE_DETAIL': 'F',
  'RULE_127_TRADE': 'G',
  'RULE_155_TRADE': 'H',
  'SOLD_LAST': 'I',
  'NEXT_DAY_TRADE': 'J',
  'OPENED': 'K',
  'SELLER': 'L',
  'SOLD': 'M',
  'STOPPED_STOCK': 'N',
  'IMBALANCE_MORE_BUYERS': 'P',
  'IMBALANCE_MORE_SELLERS': 'Q',
  'OPENING_PRICE': 'R',
};

TradeCondition.Tag = '277';

TradeCondition.Type = 'MULTIPLEVALUESTRING';

TradeCondition.Values = invert(TradeCondition.Keys);

module.exports = TradeCondition;