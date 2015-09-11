var invert = require('invert-obj');

function DiscretionRoundDirection (discretionRoundDirection) {
  this.message = discretionRoundDirection;
}

DiscretionRoundDirection.prototype.value = function () {
  return this.message;
};


DiscretionRoundDirection.Keys = {
  'MORE_AGGRESSIVE_ON_A_BUY_ORDER_ROUND_THE_PRICE_UP_ROUND_UP_TO_THE_NEAREST_TICK_ON_A_SELL_ROUND_DOWN_TO_THE_NEAREST_TICK': '1',
  'MORE_PASSIVE_ON_A_BUY_ORDER_ROUND_DOWN_TO_NEAREST_TICK_ON_A_SELL_ORDER_ROUND_UP_TO_NEAREST_TICK': '2',
};

DiscretionRoundDirection.Tag = '844';

DiscretionRoundDirection.Type = 'INT';

DiscretionRoundDirection.Values = invert(DiscretionRoundDirection.Keys);

module.exports = DiscretionRoundDirection;