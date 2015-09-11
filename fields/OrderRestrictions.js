var invert = require('invert-obj');

function OrderRestrictions (orderRestrictions) {
  this.message = orderRestrictions;
}

OrderRestrictions.prototype.value = function () {
  return this.message;
};


OrderRestrictions.Keys = {
  'PROGRAM_TRADE': '1',
  'INDEX_ARBITRAGE': '2',
  'NON_INDEX_ARBITRAGE': '3',
  'COMPETING_MARKET_MAKER': '4',
  'ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY': '5',
  'ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY': '6',
  'FOREIGN_ENTITY': '7',
  'EXTERNAL_MARKET_PARTICIPANT': '8',
  'EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE': '9',
  'RISKLESS_ARBITRAGE': 'A',
};

OrderRestrictions.Tag = '529';

OrderRestrictions.Type = 'MULTIPLEVALUESTRING';

OrderRestrictions.Values = invert(OrderRestrictions.Keys);

module.exports = OrderRestrictions;