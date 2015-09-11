var invert = require('invert-obj');

function PosType (posType) {
  this.message = posType;
}

PosType.prototype.value = function () {
  return this.message;
};


PosType.Keys = {
  'TRANSACTION_QUANTITY': 'TQ',
  'INTRA_SPREAD_QTY': 'IAS',
  'INTER_SPREAD_QTY': 'IES',
  'END_OF_DAY_QTY': 'FIN',
  'START_OF_DAY_QTY': 'SOD',
  'OPTION_EXERCISE_QTY': 'EX',
  'OPTION_ASSIGNMENT': 'AS',
  'TRANSACTION_FROM_EXERCISE': 'TX',
  'TRANSACTION_FROM_ASSIGNMENT': 'TA',
  'PIT_TRADE_QTY': 'PIT',
  'TRANSFER_TRADE_QTY': 'TRF',
  'ELECTRONIC_TRADE_QTY': 'ETR',
  'ALLOCATION_TRADE_QTY': 'ALC',
  'ADJUSTMENT_QTY': 'PA',
  'AS_OF_TRADE_QTY': 'ASF',
  'DELIVERY_QTY': 'DLV',
  'TOTAL_TRANSACTION_QTY': 'TOT',
  'CROSS_MARGIN_QTY': 'XM',
  'INTEGRAL_SPLIT': 'SPL',
};

PosType.Tag = '703';

PosType.Type = 'STRING';

PosType.Values = invert(PosType.Keys);

module.exports = PosType;