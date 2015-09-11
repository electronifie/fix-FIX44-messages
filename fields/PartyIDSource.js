var invert = require('invert-obj');

function PartyIDSource (partyIdsource) {
  this.message = partyIdsource;
}

PartyIDSource.prototype.value = function () {
  return this.message;
};


PartyIDSource.Keys = {
  'BIC': 'B',
  'GENERALLY_ACCEPTED_MARKET_PARTICIPANT_IDENTIFIER': 'C',
  'PROPRIETARY_CUSTOM_CODE': 'D',
  'ISO_COUNTRY_CODE': 'E',
  'SETTLEMENT_ENTITY_LOCATION': 'F',
  'MIC': 'G',
  'CSD_PARTICIPANT_MEMBER_CODE': 'H',
  'KOREAN_INVESTOR_ID': '1',
  'TAIWANESE_QUALIFIED_FOREIGN_INVESTOR_ID_QFII': '2',
  'TAIWANESE_TRADING_ACCOUNT': '3',
  'MALAYSIAN_CENTRAL_DEPOSITORY': '4',
  'CHINESE_B_SHARE': '5',
  'UK_NATIONAL_INSURANCE_OR_PENSION_NUMBER': '6',
  'US_SOCIAL_SECURITY_NUMBER': '7',
  'US_EMPLOYER_IDENTIFICATION_NUMBER': '8',
  'AUSTRALIAN_BUSINESS_NUMBER': '9',
  'AUSTRALIAN_TAX_FILE_NUMBER': 'A',
  'DIRECTED_BROKER_THREE_CHARACTER_ACRONYM_AS_DEFINED_IN_ISITC_ETC_BEST_PRACTICE_GUIDELINES_DOCUMENT': 'I',
};

PartyIDSource.Tag = '447';

PartyIDSource.Type = 'CHAR';

PartyIDSource.Values = invert(PartyIDSource.Keys);

module.exports = PartyIDSource;