var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var RelSymDerivSecGrp = require('../components/RelSymDerivSecGrp');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityResponseID = require('../fields/SecurityResponseID');
var SecurityRequestResult = require('../fields/SecurityRequestResult');
var TotNoRelatedSym = require('../fields/TotNoRelatedSym');
var LastFragment = require('../fields/LastFragment');

function DerivativeSecurityList (derivativeSecurityList) {
  this.message = derivativeSecurityList;
}

DerivativeSecurityList.prototype.underlyingInstrument = function () {
  return this.message.groups[DerivativeSecurityList.Tags.UnderlyingInstrument]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

DerivativeSecurityList.prototype.relSymDerivSecGrp = function () {
  return this.message.groups[DerivativeSecurityList.Tags.RelSymDerivSecGrp]
    .map(function (relSymDerivSecGrp) {
      return new RelSymDerivSecGrp(relSymDerivSecGrp);
  });
};

DerivativeSecurityList.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[DerivativeSecurityList.Tags.SecurityReqID]);
};

DerivativeSecurityList.prototype.securityResponseId = function () {
  return new SecurityResponseID(this.message.tags[DerivativeSecurityList.Tags.SecurityResponseID]);
};

DerivativeSecurityList.prototype.securityRequestResult = function () {
  return new SecurityRequestResult(this.message.tags[DerivativeSecurityList.Tags.SecurityRequestResult]);
};

DerivativeSecurityList.prototype.totNoRelatedSym = function () {
  return new TotNoRelatedSym(this.message.tags[DerivativeSecurityList.Tags.TotNoRelatedSym]);
};

DerivativeSecurityList.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[DerivativeSecurityList.Tags.LastFragment]);
};

DerivativeSecurityList.Tags = {
  UnderlyingInstrument: '311',
  RelSymDerivSecGrp: '146',
  SecurityReqID: '320',
  SecurityResponseID: '322',
  SecurityRequestResult: '560',
  TotNoRelatedSym: '393',
  LastFragment: '893',
};

DerivativeSecurityList.msgType = 'AA';

module.exports = DerivativeSecurityList;