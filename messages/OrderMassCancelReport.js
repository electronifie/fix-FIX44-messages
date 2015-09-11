var AffectedOrdGrp = require('../components/AffectedOrdGrp');
var Instrument = require('../components/Instrument');
var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var OrderID = require('../fields/OrderID');
var SecondaryOrderID = require('../fields/SecondaryOrderID');
var MassCancelRequestType = require('../fields/MassCancelRequestType');
var MassCancelResponse = require('../fields/MassCancelResponse');
var MassCancelRejectReason = require('../fields/MassCancelRejectReason');
var TotalAffectedOrders = require('../fields/TotalAffectedOrders');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var Side = require('../fields/Side');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function OrderMassCancelReport (orderMassCancelReport) {
  this.message = orderMassCancelReport;
}

OrderMassCancelReport.prototype.affectedOrdGrp = function () {
  return this.message.groups[OrderMassCancelReport.Tags.AffectedOrdGrp]
    .map(function (affectedOrdGrp) {
      return new AffectedOrdGrp(affectedOrdGrp);
  });
};

OrderMassCancelReport.prototype.instrument = function () {
  return this.message.groups[OrderMassCancelReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

OrderMassCancelReport.prototype.underlyingInstrument = function () {
  return this.message.groups[OrderMassCancelReport.Tags.UnderlyingInstrument]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

OrderMassCancelReport.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[OrderMassCancelReport.Tags.ClOrdID]);
};

OrderMassCancelReport.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[OrderMassCancelReport.Tags.SecondaryClOrdID]);
};

OrderMassCancelReport.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderMassCancelReport.Tags.OrderID]);
};

OrderMassCancelReport.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[OrderMassCancelReport.Tags.SecondaryOrderID]);
};

OrderMassCancelReport.prototype.massCancelRequestType = function () {
  return new MassCancelRequestType(this.message.tags[OrderMassCancelReport.Tags.MassCancelRequestType]);
};

OrderMassCancelReport.prototype.massCancelResponse = function () {
  return new MassCancelResponse(this.message.tags[OrderMassCancelReport.Tags.MassCancelResponse]);
};

OrderMassCancelReport.prototype.massCancelRejectReason = function () {
  return new MassCancelRejectReason(this.message.tags[OrderMassCancelReport.Tags.MassCancelRejectReason]);
};

OrderMassCancelReport.prototype.totalAffectedOrders = function () {
  return new TotalAffectedOrders(this.message.tags[OrderMassCancelReport.Tags.TotalAffectedOrders]);
};

OrderMassCancelReport.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[OrderMassCancelReport.Tags.TradingSessionID]);
};

OrderMassCancelReport.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[OrderMassCancelReport.Tags.TradingSessionSubID]);
};

OrderMassCancelReport.prototype.side = function () {
  return new Side(this.message.tags[OrderMassCancelReport.Tags.Side]);
};

OrderMassCancelReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[OrderMassCancelReport.Tags.TransactTime]);
};

OrderMassCancelReport.prototype.text = function () {
  return new Text(this.message.tags[OrderMassCancelReport.Tags.Text]);
};

OrderMassCancelReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[OrderMassCancelReport.Tags.EncodedTextLen]);
};

OrderMassCancelReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[OrderMassCancelReport.Tags.EncodedText]);
};

OrderMassCancelReport.Tags = {
  AffectedOrdGrp: '534',
  Instrument: '55',
  UnderlyingInstrument: '311',
  ClOrdID: '11',
  SecondaryClOrdID: '526',
  OrderID: '37',
  SecondaryOrderID: '198',
  MassCancelRequestType: '530',
  MassCancelResponse: '531',
  MassCancelRejectReason: '532',
  TotalAffectedOrders: '533',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  Side: '54',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

OrderMassCancelReport.msgType = 'r';

module.exports = OrderMassCancelReport;