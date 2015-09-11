var Instrument = require('../components/Instrument');
var TrdRegTimestamps = require('../components/TrdRegTimestamps');
var TrdInstrmtLegGrp = require('../components/TrdInstrmtLegGrp');
var TrdAllocGrp = require('../components/TrdAllocGrp');
var TradeReportID = require('../fields/TradeReportID');
var TradeReportTransType = require('../fields/TradeReportTransType');
var TradeReportType = require('../fields/TradeReportType');
var TrdType = require('../fields/TrdType');
var TrdSubType = require('../fields/TrdSubType');
var SecondaryTrdType = require('../fields/SecondaryTrdType');
var TransferReason = require('../fields/TransferReason');
var ExecType = require('../fields/ExecType');
var TradeReportRefID = require('../fields/TradeReportRefID');
var SecondaryTradeReportRefID = require('../fields/SecondaryTradeReportRefID');
var TrdRptStatus = require('../fields/TrdRptStatus');
var TradeReportRejectReason = require('../fields/TradeReportRejectReason');
var SecondaryTradeReportID = require('../fields/SecondaryTradeReportID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var TradeLinkID = require('../fields/TradeLinkID');
var TrdMatchID = require('../fields/TrdMatchID');
var ExecID = require('../fields/ExecID');
var SecondaryExecID = require('../fields/SecondaryExecID');
var TransactTime = require('../fields/TransactTime');
var ResponseTransportType = require('../fields/ResponseTransportType');
var ResponseDestination = require('../fields/ResponseDestination');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var ClearingFeeIndicator = require('../fields/ClearingFeeIndicator');
var OrderCapacity = require('../fields/OrderCapacity');
var OrderRestrictions = require('../fields/OrderRestrictions');
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var PositionEffect = require('../fields/PositionEffect');
var PreallocMethod = require('../fields/PreallocMethod');

function TradeCaptureReportAck (tradeCaptureReportAck) {
  this.message = tradeCaptureReportAck;
}

TradeCaptureReportAck.prototype.instrument = function () {
  return this.message.groups[TradeCaptureReportAck.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

TradeCaptureReportAck.prototype.trdRegTimestamps = function () {
  return this.message.groups[TradeCaptureReportAck.Tags.TrdRegTimestamps]
    .map(function (trdRegTimestamps) {
      return new TrdRegTimestamps(trdRegTimestamps);
  });
};

TradeCaptureReportAck.prototype.trdInstrmtLegGrp = function () {
  return this.message.groups[TradeCaptureReportAck.Tags.TrdInstrmtLegGrp]
    .map(function (trdInstrmtLegGrp) {
      return new TrdInstrmtLegGrp(trdInstrmtLegGrp);
  });
};

TradeCaptureReportAck.prototype.trdAllocGrp = function () {
  return this.message.groups[TradeCaptureReportAck.Tags.TrdAllocGrp]
    .map(function (trdAllocGrp) {
      return new TrdAllocGrp(trdAllocGrp);
  });
};

TradeCaptureReportAck.prototype.tradeReportId = function () {
  return new TradeReportID(this.message.tags[TradeCaptureReportAck.Tags.TradeReportID]);
};

TradeCaptureReportAck.prototype.tradeReportTransType = function () {
  return new TradeReportTransType(this.message.tags[TradeCaptureReportAck.Tags.TradeReportTransType]);
};

TradeCaptureReportAck.prototype.tradeReportType = function () {
  return new TradeReportType(this.message.tags[TradeCaptureReportAck.Tags.TradeReportType]);
};

TradeCaptureReportAck.prototype.trdType = function () {
  return new TrdType(this.message.tags[TradeCaptureReportAck.Tags.TrdType]);
};

TradeCaptureReportAck.prototype.trdSubType = function () {
  return new TrdSubType(this.message.tags[TradeCaptureReportAck.Tags.TrdSubType]);
};

TradeCaptureReportAck.prototype.secondaryTrdType = function () {
  return new SecondaryTrdType(this.message.tags[TradeCaptureReportAck.Tags.SecondaryTrdType]);
};

TradeCaptureReportAck.prototype.transferReason = function () {
  return new TransferReason(this.message.tags[TradeCaptureReportAck.Tags.TransferReason]);
};

TradeCaptureReportAck.prototype.execType = function () {
  return new ExecType(this.message.tags[TradeCaptureReportAck.Tags.ExecType]);
};

TradeCaptureReportAck.prototype.tradeReportRefId = function () {
  return new TradeReportRefID(this.message.tags[TradeCaptureReportAck.Tags.TradeReportRefID]);
};

TradeCaptureReportAck.prototype.secondaryTradeReportRefId = function () {
  return new SecondaryTradeReportRefID(this.message.tags[TradeCaptureReportAck.Tags.SecondaryTradeReportRefID]);
};

TradeCaptureReportAck.prototype.trdRptStatus = function () {
  return new TrdRptStatus(this.message.tags[TradeCaptureReportAck.Tags.TrdRptStatus]);
};

TradeCaptureReportAck.prototype.tradeReportRejectReason = function () {
  return new TradeReportRejectReason(this.message.tags[TradeCaptureReportAck.Tags.TradeReportRejectReason]);
};

TradeCaptureReportAck.prototype.secondaryTradeReportId = function () {
  return new SecondaryTradeReportID(this.message.tags[TradeCaptureReportAck.Tags.SecondaryTradeReportID]);
};

TradeCaptureReportAck.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[TradeCaptureReportAck.Tags.SubscriptionRequestType]);
};

TradeCaptureReportAck.prototype.tradeLinkId = function () {
  return new TradeLinkID(this.message.tags[TradeCaptureReportAck.Tags.TradeLinkID]);
};

TradeCaptureReportAck.prototype.trdMatchId = function () {
  return new TrdMatchID(this.message.tags[TradeCaptureReportAck.Tags.TrdMatchID]);
};

TradeCaptureReportAck.prototype.execId = function () {
  return new ExecID(this.message.tags[TradeCaptureReportAck.Tags.ExecID]);
};

TradeCaptureReportAck.prototype.secondaryExecId = function () {
  return new SecondaryExecID(this.message.tags[TradeCaptureReportAck.Tags.SecondaryExecID]);
};

TradeCaptureReportAck.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[TradeCaptureReportAck.Tags.TransactTime]);
};

TradeCaptureReportAck.prototype.responseTransportType = function () {
  return new ResponseTransportType(this.message.tags[TradeCaptureReportAck.Tags.ResponseTransportType]);
};

TradeCaptureReportAck.prototype.responseDestination = function () {
  return new ResponseDestination(this.message.tags[TradeCaptureReportAck.Tags.ResponseDestination]);
};

TradeCaptureReportAck.prototype.text = function () {
  return new Text(this.message.tags[TradeCaptureReportAck.Tags.Text]);
};

TradeCaptureReportAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[TradeCaptureReportAck.Tags.EncodedTextLen]);
};

TradeCaptureReportAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[TradeCaptureReportAck.Tags.EncodedText]);
};

TradeCaptureReportAck.prototype.clearingFeeIndicator = function () {
  return new ClearingFeeIndicator(this.message.tags[TradeCaptureReportAck.Tags.ClearingFeeIndicator]);
};

TradeCaptureReportAck.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[TradeCaptureReportAck.Tags.OrderCapacity]);
};

TradeCaptureReportAck.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[TradeCaptureReportAck.Tags.OrderRestrictions]);
};

TradeCaptureReportAck.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[TradeCaptureReportAck.Tags.CustOrderCapacity]);
};

TradeCaptureReportAck.prototype.account = function () {
  return new Account(this.message.tags[TradeCaptureReportAck.Tags.Account]);
};

TradeCaptureReportAck.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[TradeCaptureReportAck.Tags.AcctIDSource]);
};

TradeCaptureReportAck.prototype.accountType = function () {
  return new AccountType(this.message.tags[TradeCaptureReportAck.Tags.AccountType]);
};

TradeCaptureReportAck.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[TradeCaptureReportAck.Tags.PositionEffect]);
};

TradeCaptureReportAck.prototype.preallocMethod = function () {
  return new PreallocMethod(this.message.tags[TradeCaptureReportAck.Tags.PreallocMethod]);
};

TradeCaptureReportAck.Tags = {
  Instrument: '55',
  TrdRegTimestamps: '768',
  TrdInstrmtLegGrp: '555',
  TrdAllocGrp: '78',
  TradeReportID: '571',
  TradeReportTransType: '487',
  TradeReportType: '856',
  TrdType: '828',
  TrdSubType: '829',
  SecondaryTrdType: '855',
  TransferReason: '830',
  ExecType: '150',
  TradeReportRefID: '572',
  SecondaryTradeReportRefID: '881',
  TrdRptStatus: '939',
  TradeReportRejectReason: '751',
  SecondaryTradeReportID: '818',
  SubscriptionRequestType: '263',
  TradeLinkID: '820',
  TrdMatchID: '880',
  ExecID: '17',
  SecondaryExecID: '527',
  TransactTime: '60',
  ResponseTransportType: '725',
  ResponseDestination: '726',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  ClearingFeeIndicator: '635',
  OrderCapacity: '528',
  OrderRestrictions: '529',
  CustOrderCapacity: '582',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  PositionEffect: '77',
  PreallocMethod: '591',
};

TradeCaptureReportAck.msgType = 'AR';

module.exports = TradeCaptureReportAck;