var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var SecurityStatusReqID = require('../fields/SecurityStatusReqID');
var Currency = require('../fields/Currency');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');

function SecurityStatusRequest (securityStatusRequest) {
  this.message = securityStatusRequest;
}

SecurityStatusRequest.prototype.instrument = function () {
  return this.message.groups[SecurityStatusRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

SecurityStatusRequest.prototype.instrumentExtension = function () {
  return this.message.groups[SecurityStatusRequest.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

SecurityStatusRequest.prototype.undInstrmtGrp = function () {
  return this.message.groups[SecurityStatusRequest.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

SecurityStatusRequest.prototype.instrmtLegGrp = function () {
  return this.message.groups[SecurityStatusRequest.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

SecurityStatusRequest.prototype.securityStatusReqId = function () {
  return new SecurityStatusReqID(this.message.tags[SecurityStatusRequest.Tags.SecurityStatusReqID]);
};

SecurityStatusRequest.prototype.currency = function () {
  return new Currency(this.message.tags[SecurityStatusRequest.Tags.Currency]);
};

SecurityStatusRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[SecurityStatusRequest.Tags.SubscriptionRequestType]);
};

SecurityStatusRequest.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[SecurityStatusRequest.Tags.TradingSessionID]);
};

SecurityStatusRequest.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[SecurityStatusRequest.Tags.TradingSessionSubID]);
};

SecurityStatusRequest.Tags = {
  Instrument: '55',
  InstrumentExtension: '668',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  SecurityStatusReqID: '324',
  Currency: '15',
  SubscriptionRequestType: '263',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
};

SecurityStatusRequest.msgType = 'e';

module.exports = SecurityStatusRequest;