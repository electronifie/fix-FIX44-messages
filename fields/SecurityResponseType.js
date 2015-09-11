var invert = require('invert-obj');

function SecurityResponseType (securityResponseType) {
  this.message = securityResponseType;
}

SecurityResponseType.prototype.value = function () {
  return this.message;
};


SecurityResponseType.Keys = {
  'ACCEPT_SECURITY_PROPOSAL_AS_IS': '1',
  'ACCEPT_SECURITY_PROPOSAL_WITH_REVISIONS_AS_INDICATED_IN_THE_MESSAGE': '2',
  'REJECT_SECURITY_PROPOSAL': '5',
  'CAN_NOT_MATCH_SELECTION_CRITERIA': '6',
};

SecurityResponseType.Tag = '323';

SecurityResponseType.Type = 'INT';

SecurityResponseType.Values = invert(SecurityResponseType.Keys);

module.exports = SecurityResponseType;