var invert = require('invert-obj');

function CorporateAction (corporateAction) {
  this.message = corporateAction;
}

CorporateAction.prototype.value = function () {
  return this.message;
};


CorporateAction.Keys = {
  'EX_DIVIDEND': 'A',
  'EX_DISTRIBUTION': 'B',
  'EX_RIGHTS': 'C',
  'NEW': 'D',
  'EX_INTEREST': 'E',
};

CorporateAction.Tag = '292';

CorporateAction.Type = 'MULTIPLEVALUESTRING';

CorporateAction.Values = invert(CorporateAction.Keys);

module.exports = CorporateAction;