var invert = require('invert-obj');

function ContAmtType (contAmtType) {
  this.message = contAmtType;
}

ContAmtType.prototype.value = function () {
  return this.message;
};


ContAmtType.Keys = {
  'COMMISSION_AMOUNT': '1',
  'COMMISSION': '2',
  'INITIAL_CHARGE_AMOUNT': '3',
  'INITIAL_CHARGE': '4',
  'DISCOUNT_AMOUNT': '5',
  'DISCOUNT': '6',
  'DILUTION_LEVY_AMOUNT': '7',
  'DILUTION_LEVY': '8',
  'EXIT_CHARGE_AMOUNT': '9',
  'EXIT_CHARGE': '10',
  'FUND_BASED_RENEWAL_COMMISSION': '11',
  'PROJECTED_FUND_VALUE': '12',
  'FUND_BASED_RENEWAL_COMMISSION_AMOUNT_13': '13',
  'FUND_BASED_RENEWAL_COMMISSION_AMOUNT_14': '14',
  'NET_SETTLEMENT_AMOUNT': '15',
};

ContAmtType.Tag = '519';

ContAmtType.Type = 'INT';

ContAmtType.Values = invert(ContAmtType.Keys);

module.exports = ContAmtType;