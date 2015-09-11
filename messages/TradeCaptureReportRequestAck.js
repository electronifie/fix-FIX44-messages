var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var TradeRequestID = require('../fields/TradeRequestID');
var TradeRequestType = require('../fields/TradeRequestType');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var TotNumTradeReports = require('../fields/TotNumTradeReports');
var TradeRequestResult = require('../fields/TradeRequestResult');
var TradeRequestStatus = require('../fields/TradeRequestStatus');
var MultiLegReportingType = require('../fields/MultiLegReportingType');
var ResponseTransportType = require('../fields/ResponseTransportType');
var ResponseDestination = require('../fields/ResponseDestination');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function TradeCaptureReportRequestAck (tradeCaptureReportRequestAck) {
  this.message = tradeCaptureReportRequestAck;
}

TradeCaptureReportRequestAck.prototype.instrument = function () {
  return this.message.groups[TradeCaptureReportRequestAck.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

TradeCaptureReportRequestAck.prototype.undInstrmtGrp = function () {
  return this.message.groups[TradeCaptureReportRequestAck.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

TradeCaptureReportRequestAck.prototype.instrmtLegGrp = function () {
  return this.message.groups[TradeCaptureReportRequestAck.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

TradeCaptureReportRequestAck.prototype.tradeRequestId = function () {
  return new TradeRequestID(this.message.tags[TradeCaptureReportRequestAck.Tags.TradeRequestID]);
};

TradeCaptureReportRequestAck.prototype.tradeRequestType = function () {
  return new TradeRequestType(this.message.tags[TradeCaptureReportRequestAck.Tags.TradeRequestType]);
};

TradeCaptureReportRequestAck.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[TradeCaptureReportRequestAck.Tags.SubscriptionRequestType]);
};

TradeCaptureReportRequestAck.prototype.totNumTradeReports = function () {
  return new TotNumTradeReports(this.message.tags[TradeCaptureReportRequestAck.Tags.TotNumTradeReports]);
};

TradeCaptureReportRequestAck.prototype.tradeRequestResult = function () {
  return new TradeRequestResult(this.message.tags[TradeCaptureReportRequestAck.Tags.TradeRequestResult]);
};

TradeCaptureReportRequestAck.prototype.tradeRequestStatus = function () {
  return new TradeRequestStatus(this.message.tags[TradeCaptureReportRequestAck.Tags.TradeRequestStatus]);
};

TradeCaptureReportRequestAck.prototype.multiLegReportingType = function () {
  return new MultiLegReportingType(this.message.tags[TradeCaptureReportRequestAck.Tags.MultiLegReportingType]);
};

TradeCaptureReportRequestAck.prototype.responseTransportType = function () {
  return new ResponseTransportType(this.message.tags[TradeCaptureReportRequestAck.Tags.ResponseTransportType]);
};

TradeCaptureReportRequestAck.prototype.responseDestination = function () {
  return new ResponseDestination(this.message.tags[TradeCaptureReportRequestAck.Tags.ResponseDestination]);
};

TradeCaptureReportRequestAck.prototype.text = function () {
  return new Text(this.message.tags[TradeCaptureReportRequestAck.Tags.Text]);
};

TradeCaptureReportRequestAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[TradeCaptureReportRequestAck.Tags.EncodedTextLen]);
};

TradeCaptureReportRequestAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[TradeCaptureReportRequestAck.Tags.EncodedText]);
};

TradeCaptureReportRequestAck.Tags = {
  Instrument: '55',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  TradeRequestID: '568',
  TradeRequestType: '569',
  SubscriptionRequestType: '263',
  TotNumTradeReports: '748',
  TradeRequestResult: '749',
  TradeRequestStatus: '750',
  MultiLegReportingType: '442',
  ResponseTransportType: '725',
  ResponseDestination: '726',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

TradeCaptureReportRequestAck.msgType = 'AQ';

module.exports = TradeCaptureReportRequestAck;