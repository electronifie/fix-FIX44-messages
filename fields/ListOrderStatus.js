var invert = require('invert-obj');

function ListOrderStatus (listOrderStatus) {
  this.message = listOrderStatus;
}

ListOrderStatus.prototype.value = function () {
  return this.message;
};


ListOrderStatus.Keys = {
  'INBIDDINGPROCESS': '1',
  'RECEIVEDFOREXECUTION': '2',
  'EXECUTING': '3',
  'CANCELING': '4',
  'ALERT': '5',
  'ALL_DONE': '6',
  'REJECT': '7',
};

ListOrderStatus.Tag = '431';

ListOrderStatus.Type = 'INT';

ListOrderStatus.Values = invert(ListOrderStatus.Keys);

module.exports = ListOrderStatus;