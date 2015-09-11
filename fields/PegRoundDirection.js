var invert = require('invert-obj');

function PegRoundDirection (pegRoundDirection) {
  this.message = pegRoundDirection;
}

PegRoundDirection.prototype.value = function () {
  return this.message;
};


PegRoundDirection.Keys = {
  'MORE_AGGRESSIVE_ON_A_BUY_ORDER_ROUND_THE_PRICE_UP_ROUND_UP_TO_THE_NEAREST_TICK_ON_A_SELL_ROUND_DOWN_TO_THE_NEAREST_TICK': '1',
  'MORE_PASSIVE_ON_A_BUY_ORDER_ROUND_DOWN_TO_NEAREST_TICK_ON_A_SELL_ORDER_ROUND_UP_TO_NEAREST_TICK': '2',
};

PegRoundDirection.Tag = '838';

PegRoundDirection.Type = 'INT';

PegRoundDirection.Values = invert(PegRoundDirection.Keys);

module.exports = PegRoundDirection;