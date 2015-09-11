var invert = require('invert-obj');

function MoneyLaunderingStatus (moneyLaunderingStatus) {
  this.message = moneyLaunderingStatus;
}

MoneyLaunderingStatus.prototype.value = function () {
  return this.message;
};


MoneyLaunderingStatus.Keys = {
  'PASSED': 'Y',
  'NOT_CHECKED': 'N',
  'EXEMPT_BELOW_THE_LIMIT': '1',
  'EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION': '2',
  'EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION': '3',
};

MoneyLaunderingStatus.Tag = '481';

MoneyLaunderingStatus.Type = 'CHAR';

MoneyLaunderingStatus.Values = invert(MoneyLaunderingStatus.Keys);

module.exports = MoneyLaunderingStatus;