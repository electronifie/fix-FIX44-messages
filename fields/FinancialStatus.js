var invert = require('invert-obj');

function FinancialStatus (financialStatus) {
  this.message = financialStatus;
}

FinancialStatus.prototype.value = function () {
  return this.message;
};


FinancialStatus.Keys = {
  'BANKRUPT': '1',
  'PENDING_DELISTING': '2',
};

FinancialStatus.Tag = '291';

FinancialStatus.Type = 'MULTIPLEVALUESTRING';

FinancialStatus.Values = invert(FinancialStatus.Keys);

module.exports = FinancialStatus;