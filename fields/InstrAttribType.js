var invert = require('invert-obj');

function InstrAttribType (instrAttribType) {
  this.message = instrAttribType;
}

InstrAttribType.prototype.value = function () {
  return this.message;
};


InstrAttribType.Keys = {
  'FLAT': '1',
  'ZERO_COUPON': '2',
  'INTEREST_BEARING': '3',
  'NO_PERIODIC_PAYMENTS': '4',
  'VARIABLE_RATE': '5',
  'LESS_FEE_FOR_PUT': '6',
  'STEPPED_COUPON': '7',
  'COUPON_PERIOD': '8',
  'WHEN_AND_IF_ISSUED': '9',
  'ORIGINAL_ISSUE_DISCOUNT': '10',
  'CALLABLE_PUTTABLE': '11',
  'ESCROWED_TO_MATURITY': '12',
  'ESCROWED_TO_REDEMPTION_DATE_CALLABLE_SUPPLY_REDEMPTION_DATE_IN_THE_INSTRATTRIBVALUE': '13',
  'PREREFUNDED': '14',
  'IN_DEFAULT': '15',
  'UNRATED': '16',
  'TAXABLE': '17',
  'INDEXED': '18',
  'SUBJECT_TO_ALTERNATIVE_MINIMUM_TAX': '19',
  'ORIGINAL_ISSUE_DISCOUNT_PRICE_SUPPLY_PRICE_IN_THE_INSTRATTRIBVALUE': '20',
  'CALLABLE_BELOW_MATURITY_VALUE': '21',
  'CALLABLE_WITHOUT_NOTICE_BY_MAIL_TO_HOLDER_UNLESS_REGISTERED': '22',
  'TEXT_SUPPLY_THE_TEXT_OF_THE_ATTRIBUTE_OR_DISCLAIMER_IN_THE_INSTRATTRIBVALUE': '99',
};

InstrAttribType.Tag = '871';

InstrAttribType.Type = 'INT';

InstrAttribType.Values = invert(InstrAttribType.Keys);

module.exports = InstrAttribType;