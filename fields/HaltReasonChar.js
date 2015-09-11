var invert = require('invert-obj');

function HaltReasonChar (haltReasonChar) {
  this.message = haltReasonChar;
}

HaltReasonChar.prototype.value = function () {
  return this.message;
};


HaltReasonChar.Keys = {
  'ORDER_IMBALANCE': 'I',
  'EQUIPMENT_CHANGEOVER': 'X',
  'NEWS_PENDING': 'P',
  'NEWS_DISSEMINATION': 'D',
  'ORDER_INFLUX': 'E',
  'ADDITIONAL_INFORMATION': 'M',
};

HaltReasonChar.Tag = '327';

HaltReasonChar.Type = 'CHAR';

HaltReasonChar.Values = invert(HaltReasonChar.Keys);

module.exports = HaltReasonChar;