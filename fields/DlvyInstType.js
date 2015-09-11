var invert = require('invert-obj');

function DlvyInstType (dlvyInstType) {
  this.message = dlvyInstType;
}

DlvyInstType.prototype.value = function () {
  return this.message;
};


DlvyInstType.Keys = {
  'SECURITIES': 'S',
  'CASH': 'C',
};

DlvyInstType.Tag = '787';

DlvyInstType.Type = 'CHAR';

DlvyInstType.Values = invert(DlvyInstType.Keys);

module.exports = DlvyInstType;