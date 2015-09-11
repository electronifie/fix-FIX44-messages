var invert = require('invert-obj');

function ListExecInstType (listExecInstType) {
  this.message = listExecInstType;
}

ListExecInstType.prototype.value = function () {
  return this.message;
};


ListExecInstType.Keys = {
  'IMMEDIATE': '1',
  'WAIT_FOR_EXECUTE_INSTRUCTION': '2',
  'EXCHANGE_SWITCH_CIV_ORDER_SELL_DRIVEN': '3',
  'EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_TOP_UP': '4',
  'EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_WITHDRAW': '5',
};

ListExecInstType.Tag = '433';

ListExecInstType.Type = 'CHAR';

ListExecInstType.Values = invert(ListExecInstType.Keys);

module.exports = ListExecInstType;