var invert = require('invert-obj');

function PosAmtType (posAmtType) {
  this.message = posAmtType;
}

PosAmtType.prototype.value = function () {
  return this.message;
};


PosAmtType.Keys = {
  'FINAL_MARK_TO_MARKET_AMOUNT': 'FMTM',
  'INCREMENTAL_MARK_TO_MARKET_AMOUNT': 'IMTM',
  'TRADE_VARIATION_AMOUNT': 'TVAR',
  'START_OF_DAY_MARK_TO_MARKET_AMOUNT': 'SMTM',
  'PREMIUM_AMOUNT': 'PREM',
  'CASH_RESIDUAL_AMOUNT': 'CRES',
  'CASH_AMOUNT': 'CASH',
  'VALUE_ADJUSTED_AMOUNT': 'VADJ',
};

PosAmtType.Tag = '707';

PosAmtType.Type = 'STRING';

PosAmtType.Values = invert(PosAmtType.Keys);

module.exports = PosAmtType;