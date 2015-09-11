var invert = require('invert-obj');

function PartyRole (partyRole) {
  this.message = partyRole;
}

PartyRole.prototype.value = function () {
  return this.message;
};


PartyRole.Keys = {
  'EXECUTING_FIRM': '1',
  'BROKER_OF_CREDIT': '2',
  'CLIENT_ID': '3',
  'CLEARING_FIRM': '4',
  'INVESTOR_ID': '5',
  'INTRODUCING_FIRM': '6',
  'ENTERING_FIRM': '7',
  'LOCATE_LENDING_FIRM': '8',
  'FUND_MANAGER_CLIENT_ID': '9',
  'SETTLEMENT_LOCATION': '10',
  'ORDER_ORIGINATION_TRADER': '11',
  'EXECUTING_TRADER': '12',
  'ORDER_ORIGINATION_FIRM': '13',
  'GIVEUP_CLEARING_FIRM': '14',
  'CORRESPONDANT_CLEARING_FIRM': '15',
  'EXECUTING_SYSTEM': '16',
  'CONTRA_FIRM': '17',
  'CONTRA_CLEARING_FIRM': '18',
  'SPONSORING_FIRM': '19',
  'UNDERLYING_CONTRA_FIRM': '20',
  'CLEARING_ORGANIZATION': '21',
  'EXCHANGE': '22',
  'CUSTOMER_ACCOUNT': '24',
  'CORRESPONDENT_CLEARING_ORGANIZATION': '25',
  'CORRESPONDENT_BROKER': '26',
  'BUYER_SELLER': '27',
  'CUSTODIAN': '28',
  'INTERMEDIARY': '29',
  'AGENT': '30',
  'SUB_CUSTODIAN': '31',
  'BENEFICIARY': '32',
  'INTERESTED_PARTY': '33',
  'REGULATORY_BODY': '34',
  'LIQUIDITY_PROVIDER': '35',
  'ENTERING_TRADER': '36',
  'CONTRA_TRADER': '37',
  'POSITION_ACCOUNT': '38',
};

PartyRole.Tag = '452';

PartyRole.Type = 'INT';

PartyRole.Values = invert(PartyRole.Keys);

module.exports = PartyRole;