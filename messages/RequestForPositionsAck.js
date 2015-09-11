var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var PosMaintRptID = require('../fields/PosMaintRptID');
var PosReqID = require('../fields/PosReqID');
var TotalNumPosReports = require('../fields/TotalNumPosReports');
var UnsolicitedIndicator = require('../fields/UnsolicitedIndicator');
var PosReqResult = require('../fields/PosReqResult');
var PosReqStatus = require('../fields/PosReqStatus');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var Currency = require('../fields/Currency');
var ResponseTransportType = require('../fields/ResponseTransportType');
var ResponseDestination = require('../fields/ResponseDestination');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function RequestForPositionsAck (requestForPositionsAck) {
  this.message = requestForPositionsAck;
}

RequestForPositionsAck.prototype.parties = function () {
  return this.message.groups[RequestForPositionsAck.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

RequestForPositionsAck.prototype.instrument = function () {
  return this.message.groups[RequestForPositionsAck.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

RequestForPositionsAck.prototype.instrmtLegGrp = function () {
  return this.message.groups[RequestForPositionsAck.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

RequestForPositionsAck.prototype.undInstrmtGrp = function () {
  return this.message.groups[RequestForPositionsAck.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

RequestForPositionsAck.prototype.posMaintRptId = function () {
  return new PosMaintRptID(this.message.tags[RequestForPositionsAck.Tags.PosMaintRptID]);
};

RequestForPositionsAck.prototype.posReqId = function () {
  return new PosReqID(this.message.tags[RequestForPositionsAck.Tags.PosReqID]);
};

RequestForPositionsAck.prototype.totalNumPosReports = function () {
  return new TotalNumPosReports(this.message.tags[RequestForPositionsAck.Tags.TotalNumPosReports]);
};

RequestForPositionsAck.prototype.unsolicitedIndicator = function () {
  return new UnsolicitedIndicator(this.message.tags[RequestForPositionsAck.Tags.UnsolicitedIndicator]);
};

RequestForPositionsAck.prototype.posReqResult = function () {
  return new PosReqResult(this.message.tags[RequestForPositionsAck.Tags.PosReqResult]);
};

RequestForPositionsAck.prototype.posReqStatus = function () {
  return new PosReqStatus(this.message.tags[RequestForPositionsAck.Tags.PosReqStatus]);
};

RequestForPositionsAck.prototype.account = function () {
  return new Account(this.message.tags[RequestForPositionsAck.Tags.Account]);
};

RequestForPositionsAck.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[RequestForPositionsAck.Tags.AcctIDSource]);
};

RequestForPositionsAck.prototype.accountType = function () {
  return new AccountType(this.message.tags[RequestForPositionsAck.Tags.AccountType]);
};

RequestForPositionsAck.prototype.currency = function () {
  return new Currency(this.message.tags[RequestForPositionsAck.Tags.Currency]);
};

RequestForPositionsAck.prototype.responseTransportType = function () {
  return new ResponseTransportType(this.message.tags[RequestForPositionsAck.Tags.ResponseTransportType]);
};

RequestForPositionsAck.prototype.responseDestination = function () {
  return new ResponseDestination(this.message.tags[RequestForPositionsAck.Tags.ResponseDestination]);
};

RequestForPositionsAck.prototype.text = function () {
  return new Text(this.message.tags[RequestForPositionsAck.Tags.Text]);
};

RequestForPositionsAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[RequestForPositionsAck.Tags.EncodedTextLen]);
};

RequestForPositionsAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[RequestForPositionsAck.Tags.EncodedText]);
};

RequestForPositionsAck.Tags = {
  Parties: '453',
  Instrument: '55',
  InstrmtLegGrp: '555',
  UndInstrmtGrp: '711',
  PosMaintRptID: '721',
  PosReqID: '710',
  TotalNumPosReports: '727',
  UnsolicitedIndicator: '325',
  PosReqResult: '728',
  PosReqStatus: '729',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  Currency: '15',
  ResponseTransportType: '725',
  ResponseDestination: '726',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

RequestForPositionsAck.msgType = 'AO';

module.exports = RequestForPositionsAck;