var invert = require('invert-obj');

function GTBookingInst (gtbookingInst) {
  this.message = gtbookingInst;
}

GTBookingInst.prototype.value = function () {
  return this.message;
};


GTBookingInst.Keys = {
  'BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION': '0',
  'ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES': '1',
  'ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE': '2',
};

GTBookingInst.Tag = '427';

GTBookingInst.Type = 'INT';

GTBookingInst.Values = invert(GTBookingInst.Keys);

module.exports = GTBookingInst;