var NoMDEntries = require('../fields/NoMDEntries');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var MDUpdateAction = require('../fields/MDUpdateAction');
var DeleteReason = require('../fields/DeleteReason');
var MDEntryType = require('../fields/MDEntryType');
var MDEntryID = require('../fields/MDEntryID');
var MDEntryRefID = require('../fields/MDEntryRefID');
var FinancialStatus = require('../fields/FinancialStatus');
var CorporateAction = require('../fields/CorporateAction');
var MDEntryPx = require('../fields/MDEntryPx');
var Currency = require('../fields/Currency');
var MDEntrySize = require('../fields/MDEntrySize');
var MDEntryDate = require('../fields/MDEntryDate');
var MDEntryTime = require('../fields/MDEntryTime');
var TickDirection = require('../fields/TickDirection');
var MDMkt = require('../fields/MDMkt');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var QuoteCondition = require('../fields/QuoteCondition');
var TradeCondition = require('../fields/TradeCondition');
var MDEntryOriginator = require('../fields/MDEntryOriginator');
var LocationID = require('../fields/LocationID');
var DeskID = require('../fields/DeskID');
var OpenCloseSettlFlag = require('../fields/OpenCloseSettlFlag');
var TimeInForce = require('../fields/TimeInForce');
var ExpireDate = require('../fields/ExpireDate');
var ExpireTime = require('../fields/ExpireTime');
var MinQty = require('../fields/MinQty');
var ExecInst = require('../fields/ExecInst');
var SellerDays = require('../fields/SellerDays');
var OrderID = require('../fields/OrderID');
var QuoteEntryID = require('../fields/QuoteEntryID');
var MDEntryBuyer = require('../fields/MDEntryBuyer');
var MDEntrySeller = require('../fields/MDEntrySeller');
var NumberOfOrders = require('../fields/NumberOfOrders');
var MDEntryPositionNo = require('../fields/MDEntryPositionNo');
var Scope = require('../fields/Scope');
var PriceDelta = require('../fields/PriceDelta');
var NetChgPrevDay = require('../fields/NetChgPrevDay');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function MDIncGrp (mdincGrp) {
  this.message = mdincGrp;
}

/* group */

/* component */
MDIncGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
MDIncGrp.prototype.undInstrmtGrp = function () {
  return this.message.groups[UndInstrmtGrp.Tag]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

/* component */
MDIncGrp.prototype.instrmtLegGrp = function () {
  return this.message.groups[InstrmtLegGrp.Tag]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

/* field */
MDIncGrp.prototype.mdupdateAction = function () {
  return new MDUpdateAction(this.message.tags[MDUpdateAction.Tag]);
};

/* field */
MDIncGrp.prototype.deleteReason = function () {
  return new DeleteReason(this.message.tags[DeleteReason.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryType = function () {
  return new MDEntryType(this.message.tags[MDEntryType.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryId = function () {
  return new MDEntryID(this.message.tags[MDEntryID.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryRefId = function () {
  return new MDEntryRefID(this.message.tags[MDEntryRefID.Tag]);
};

/* field */
MDIncGrp.prototype.financialStatus = function () {
  return new FinancialStatus(this.message.tags[FinancialStatus.Tag]);
};

/* field */
MDIncGrp.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[CorporateAction.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryPx = function () {
  return new MDEntryPx(this.message.tags[MDEntryPx.Tag]);
};

/* field */
MDIncGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
MDIncGrp.prototype.mdentrySize = function () {
  return new MDEntrySize(this.message.tags[MDEntrySize.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryDate = function () {
  return new MDEntryDate(this.message.tags[MDEntryDate.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryTime = function () {
  return new MDEntryTime(this.message.tags[MDEntryTime.Tag]);
};

/* field */
MDIncGrp.prototype.tickDirection = function () {
  return new TickDirection(this.message.tags[TickDirection.Tag]);
};

/* field */
MDIncGrp.prototype.mdmkt = function () {
  return new MDMkt(this.message.tags[MDMkt.Tag]);
};

/* field */
MDIncGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
MDIncGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* field */
MDIncGrp.prototype.quoteCondition = function () {
  return new QuoteCondition(this.message.tags[QuoteCondition.Tag]);
};

/* field */
MDIncGrp.prototype.tradeCondition = function () {
  return new TradeCondition(this.message.tags[TradeCondition.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryOriginator = function () {
  return new MDEntryOriginator(this.message.tags[MDEntryOriginator.Tag]);
};

/* field */
MDIncGrp.prototype.locationId = function () {
  return new LocationID(this.message.tags[LocationID.Tag]);
};

/* field */
MDIncGrp.prototype.deskId = function () {
  return new DeskID(this.message.tags[DeskID.Tag]);
};

/* field */
MDIncGrp.prototype.openCloseSettlFlag = function () {
  return new OpenCloseSettlFlag(this.message.tags[OpenCloseSettlFlag.Tag]);
};

/* field */
MDIncGrp.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[TimeInForce.Tag]);
};

/* field */
MDIncGrp.prototype.expireDate = function () {
  return new ExpireDate(this.message.tags[ExpireDate.Tag]);
};

/* field */
MDIncGrp.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[ExpireTime.Tag]);
};

/* field */
MDIncGrp.prototype.minQty = function () {
  return new MinQty(this.message.tags[MinQty.Tag]);
};

/* field */
MDIncGrp.prototype.execInst = function () {
  return new ExecInst(this.message.tags[ExecInst.Tag]);
};

/* field */
MDIncGrp.prototype.sellerDays = function () {
  return new SellerDays(this.message.tags[SellerDays.Tag]);
};

/* field */
MDIncGrp.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderID.Tag]);
};

/* field */
MDIncGrp.prototype.quoteEntryId = function () {
  return new QuoteEntryID(this.message.tags[QuoteEntryID.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryBuyer = function () {
  return new MDEntryBuyer(this.message.tags[MDEntryBuyer.Tag]);
};

/* field */
MDIncGrp.prototype.mdentrySeller = function () {
  return new MDEntrySeller(this.message.tags[MDEntrySeller.Tag]);
};

/* field */
MDIncGrp.prototype.numberOfOrders = function () {
  return new NumberOfOrders(this.message.tags[NumberOfOrders.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryPositionNo = function () {
  return new MDEntryPositionNo(this.message.tags[MDEntryPositionNo.Tag]);
};

/* field */
MDIncGrp.prototype.scope = function () {
  return new Scope(this.message.tags[Scope.Tag]);
};

/* field */
MDIncGrp.prototype.priceDelta = function () {
  return new PriceDelta(this.message.tags[PriceDelta.Tag]);
};

/* field */
MDIncGrp.prototype.netChgPrevDay = function () {
  return new NetChgPrevDay(this.message.tags[NetChgPrevDay.Tag]);
};

/* field */
MDIncGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
MDIncGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
MDIncGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* end group */

MDIncGrp.Tag = '268';

module.exports = MDIncGrp;