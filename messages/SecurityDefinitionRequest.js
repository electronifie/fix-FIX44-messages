var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityRequestType = require('../fields/SecurityRequestType');
var Currency = require('../fields/Currency');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var ExpirationCycle = require('../fields/ExpirationCycle');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');

function SecurityDefinitionRequest (securityDefinitionRequest) {
  this.message = securityDefinitionRequest;
}

SecurityDefinitionRequest.prototype.instrument = function () {
  return this.message.groups[SecurityDefinitionRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

SecurityDefinitionRequest.prototype.instrumentExtension = function () {
  return this.message.groups[SecurityDefinitionRequest.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

SecurityDefinitionRequest.prototype.undInstrmtGrp = function () {
  return this.message.groups[SecurityDefinitionRequest.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

SecurityDefinitionRequest.prototype.instrmtLegGrp = function () {
  return this.message.groups[SecurityDefinitionRequest.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

SecurityDefinitionRequest.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[SecurityDefinitionRequest.Tags.SecurityReqID]);
};

SecurityDefinitionRequest.prototype.securityRequestType = function () {
  return new SecurityRequestType(this.message.tags[SecurityDefinitionRequest.Tags.SecurityRequestType]);
};

SecurityDefinitionRequest.prototype.currency = function () {
  return new Currency(this.message.tags[SecurityDefinitionRequest.Tags.Currency]);
};

SecurityDefinitionRequest.prototype.text = function () {
  return new Text(this.message.tags[SecurityDefinitionRequest.Tags.Text]);
};

SecurityDefinitionRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[SecurityDefinitionRequest.Tags.EncodedTextLen]);
};

SecurityDefinitionRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[SecurityDefinitionRequest.Tags.EncodedText]);
};

SecurityDefinitionRequest.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[SecurityDefinitionRequest.Tags.TradingSessionID]);
};

SecurityDefinitionRequest.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[SecurityDefinitionRequest.Tags.TradingSessionSubID]);
};

SecurityDefinitionRequest.prototype.expirationCycle = function () {
  return new ExpirationCycle(this.message.tags[SecurityDefinitionRequest.Tags.ExpirationCycle]);
};

SecurityDefinitionRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[SecurityDefinitionRequest.Tags.SubscriptionRequestType]);
};

SecurityDefinitionRequest.Tags = {
  Instrument: '55',
  InstrumentExtension: '668',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  SecurityReqID: '320',
  SecurityRequestType: '321',
  Currency: '15',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  ExpirationCycle: '827',
  SubscriptionRequestType: '263',
};

SecurityDefinitionRequest.msgType = 'c';

module.exports = SecurityDefinitionRequest;