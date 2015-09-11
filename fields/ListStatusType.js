var invert = require('invert-obj');

function ListStatusType (listStatusType) {
  this.message = listStatusType;
}

ListStatusType.prototype.value = function () {
  return this.message;
};


ListStatusType.Keys = {
  'ACK': '1',
  'RESPONSE': '2',
  'TIMED': '3',
  'EXECSTARTED': '4',
  'ALLDONE': '5',
  'ALERT': '6',
};

ListStatusType.Tag = '429';

ListStatusType.Type = 'INT';

ListStatusType.Values = invert(ListStatusType.Keys);

module.exports = ListStatusType;