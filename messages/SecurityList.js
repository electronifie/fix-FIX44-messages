var SecListGrp = require('../components/SecListGrp');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityResponseID = require('../fields/SecurityResponseID');
var SecurityRequestResult = require('../fields/SecurityRequestResult');
var TotNoRelatedSym = require('../fields/TotNoRelatedSym');
var LastFragment = require('../fields/LastFragment');

function SecurityList (securityList) {
  this.message = securityList;
}

SecurityList.prototype.secListGrp = function () {
  return this.message.groups[SecurityList.Tags.SecListGrp]
    .map(function (secListGrp) {
      return new SecListGrp(secListGrp);
  });
};

SecurityList.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[SecurityList.Tags.SecurityReqID]);
};

SecurityList.prototype.securityResponseId = function () {
  return new SecurityResponseID(this.message.tags[SecurityList.Tags.SecurityResponseID]);
};

SecurityList.prototype.securityRequestResult = function () {
  return new SecurityRequestResult(this.message.tags[SecurityList.Tags.SecurityRequestResult]);
};

SecurityList.prototype.totNoRelatedSym = function () {
  return new TotNoRelatedSym(this.message.tags[SecurityList.Tags.TotNoRelatedSym]);
};

SecurityList.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[SecurityList.Tags.LastFragment]);
};

SecurityList.Tags = {
  SecListGrp: '146',
  SecurityReqID: '320',
  SecurityResponseID: '322',
  SecurityRequestResult: '560',
  TotNoRelatedSym: '393',
  LastFragment: '893',
};

SecurityList.msgType = 'y';

module.exports = SecurityList;