var invert = require('invert-obj');

function QtyType (qtyType) {
  this.message = qtyType;
}

QtyType.prototype.value = function () {
  return this.message;
};


QtyType.Keys = {
  'UNITS': '0',
  'CONTRACTS': '1',
};

QtyType.Tag = '854';

QtyType.Type = 'INT';

QtyType.Values = invert(QtyType.Keys);

module.exports = QtyType;