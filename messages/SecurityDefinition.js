var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityResponseID = require('../fields/SecurityResponseID');
var SecurityResponseType = require('../fields/SecurityResponseType');
var Currency = require('../fields/Currency');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var ExpirationCycle = require('../fields/ExpirationCycle');
var RoundLot = require('../fields/RoundLot');
var MinTradeVol = require('../fields/MinTradeVol');

function SecurityDefinition (securityDefinition) {
  this.message = securityDefinition;
}

SecurityDefinition.prototype.instrument = function () {
  return this.message.groups[SecurityDefinition.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

SecurityDefinition.prototype.instrumentExtension = function () {
  return this.message.groups[SecurityDefinition.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

SecurityDefinition.prototype.undInstrmtGrp = function () {
  return this.message.groups[SecurityDefinition.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

SecurityDefinition.prototype.instrmtLegGrp = function () {
  return this.message.groups[SecurityDefinition.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

SecurityDefinition.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[SecurityDefinition.Tags.SecurityReqID]);
};

SecurityDefinition.prototype.securityResponseId = function () {
  return new SecurityResponseID(this.message.tags[SecurityDefinition.Tags.SecurityResponseID]);
};

SecurityDefinition.prototype.securityResponseType = function () {
  return new SecurityResponseType(this.message.tags[SecurityDefinition.Tags.SecurityResponseType]);
};

SecurityDefinition.prototype.currency = function () {
  return new Currency(this.message.tags[SecurityDefinition.Tags.Currency]);
};

SecurityDefinition.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[SecurityDefinition.Tags.TradingSessionID]);
};

SecurityDefinition.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[SecurityDefinition.Tags.TradingSessionSubID]);
};

SecurityDefinition.prototype.text = function () {
  return new Text(this.message.tags[SecurityDefinition.Tags.Text]);
};

SecurityDefinition.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[SecurityDefinition.Tags.EncodedTextLen]);
};

SecurityDefinition.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[SecurityDefinition.Tags.EncodedText]);
};

SecurityDefinition.prototype.expirationCycle = function () {
  return new ExpirationCycle(this.message.tags[SecurityDefinition.Tags.ExpirationCycle]);
};

SecurityDefinition.prototype.roundLot = function () {
  return new RoundLot(this.message.tags[SecurityDefinition.Tags.RoundLot]);
};

SecurityDefinition.prototype.minTradeVol = function () {
  return new MinTradeVol(this.message.tags[SecurityDefinition.Tags.MinTradeVol]);
};

SecurityDefinition.Tags = {
  Instrument: '55',
  InstrumentExtension: '668',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  SecurityReqID: '320',
  SecurityResponseID: '322',
  SecurityResponseType: '323',
  Currency: '15',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  ExpirationCycle: '827',
  RoundLot: '561',
  MinTradeVol: '562',
};

SecurityDefinition.msgType = 'd';

module.exports = SecurityDefinition;