var invert = require('invert-obj');

function ExecType (execType) {
  this.message = execType;
}

ExecType.prototype.value = function () {
  return this.message;
};


ExecType.Keys = {
  'NEW': '0',
  'DONE_FOR_DAY': '3',
  'CANCELED': '4',
  'REPLACE': '5',
  'PENDING_CANCEL': '6',
  'STOPPED': '7',
  'REJECTED': '8',
  'SUSPENDED': '9',
  'PENDING_NEW': 'A',
  'CALCULATED': 'B',
  'EXPIRED': 'C',
  'RESTATED': 'D',
  'PENDING_REPLACE': 'E',
  'TRADE': 'F',
  'TRADE_CORRECT': 'G',
  'TRADE_CANCEL': 'H',
  'ORDER_STATUS': 'I',
};

ExecType.Tag = '150';

ExecType.Type = 'CHAR';

ExecType.Values = invert(ExecType.Keys);

module.exports = ExecType;