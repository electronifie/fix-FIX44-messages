var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var TrdgSesGrp = require('../components/TrdgSesGrp');
var PositionQty = require('../components/PositionQty');
var PositionAmountData = require('../components/PositionAmountData');
var PosMaintRptID = require('../fields/PosMaintRptID');
var PosTransType = require('../fields/PosTransType');
var PosReqID = require('../fields/PosReqID');
var PosMaintAction = require('../fields/PosMaintAction');
var OrigPosReqRefID = require('../fields/OrigPosReqRefID');
var PosMaintStatus = require('../fields/PosMaintStatus');
var PosMaintResult = require('../fields/PosMaintResult');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var Currency = require('../fields/Currency');
var TransactTime = require('../fields/TransactTime');
var AdjustmentType = require('../fields/AdjustmentType');
var ThresholdAmount = require('../fields/ThresholdAmount');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PositionMaintenanceReport (positionMaintenanceReport) {
  this.message = positionMaintenanceReport;
}

PositionMaintenanceReport.prototype.parties = function () {
  return this.message.groups[PositionMaintenanceReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

PositionMaintenanceReport.prototype.instrument = function () {
  return this.message.groups[PositionMaintenanceReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

PositionMaintenanceReport.prototype.instrmtLegGrp = function () {
  return this.message.groups[PositionMaintenanceReport.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

PositionMaintenanceReport.prototype.undInstrmtGrp = function () {
  return this.message.groups[PositionMaintenanceReport.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

PositionMaintenanceReport.prototype.trdgSesGrp = function () {
  return this.message.groups[PositionMaintenanceReport.Tags.TrdgSesGrp]
    .map(function (trdgSesGrp) {
      return new TrdgSesGrp(trdgSesGrp);
  });
};

PositionMaintenanceReport.prototype.positionQty = function () {
  return this.message.groups[PositionMaintenanceReport.Tags.PositionQty]
    .map(function (positionQty) {
      return new PositionQty(positionQty);
  });
};

PositionMaintenanceReport.prototype.positionAmountData = function () {
  return this.message.groups[PositionMaintenanceReport.Tags.PositionAmountData]
    .map(function (positionAmountData) {
      return new PositionAmountData(positionAmountData);
  });
};

PositionMaintenanceReport.prototype.posMaintRptId = function () {
  return new PosMaintRptID(this.message.tags[PositionMaintenanceReport.Tags.PosMaintRptID]);
};

PositionMaintenanceReport.prototype.posTransType = function () {
  return new PosTransType(this.message.tags[PositionMaintenanceReport.Tags.PosTransType]);
};

PositionMaintenanceReport.prototype.posReqId = function () {
  return new PosReqID(this.message.tags[PositionMaintenanceReport.Tags.PosReqID]);
};

PositionMaintenanceReport.prototype.posMaintAction = function () {
  return new PosMaintAction(this.message.tags[PositionMaintenanceReport.Tags.PosMaintAction]);
};

PositionMaintenanceReport.prototype.origPosReqRefId = function () {
  return new OrigPosReqRefID(this.message.tags[PositionMaintenanceReport.Tags.OrigPosReqRefID]);
};

PositionMaintenanceReport.prototype.posMaintStatus = function () {
  return new PosMaintStatus(this.message.tags[PositionMaintenanceReport.Tags.PosMaintStatus]);
};

PositionMaintenanceReport.prototype.posMaintResult = function () {
  return new PosMaintResult(this.message.tags[PositionMaintenanceReport.Tags.PosMaintResult]);
};

PositionMaintenanceReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[PositionMaintenanceReport.Tags.ClearingBusinessDate]);
};

PositionMaintenanceReport.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[PositionMaintenanceReport.Tags.SettlSessID]);
};

PositionMaintenanceReport.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[PositionMaintenanceReport.Tags.SettlSessSubID]);
};

PositionMaintenanceReport.prototype.account = function () {
  return new Account(this.message.tags[PositionMaintenanceReport.Tags.Account]);
};

PositionMaintenanceReport.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[PositionMaintenanceReport.Tags.AcctIDSource]);
};

PositionMaintenanceReport.prototype.accountType = function () {
  return new AccountType(this.message.tags[PositionMaintenanceReport.Tags.AccountType]);
};

PositionMaintenanceReport.prototype.currency = function () {
  return new Currency(this.message.tags[PositionMaintenanceReport.Tags.Currency]);
};

PositionMaintenanceReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PositionMaintenanceReport.Tags.TransactTime]);
};

PositionMaintenanceReport.prototype.adjustmentType = function () {
  return new AdjustmentType(this.message.tags[PositionMaintenanceReport.Tags.AdjustmentType]);
};

PositionMaintenanceReport.prototype.thresholdAmount = function () {
  return new ThresholdAmount(this.message.tags[PositionMaintenanceReport.Tags.ThresholdAmount]);
};

PositionMaintenanceReport.prototype.text = function () {
  return new Text(this.message.tags[PositionMaintenanceReport.Tags.Text]);
};

PositionMaintenanceReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PositionMaintenanceReport.Tags.EncodedTextLen]);
};

PositionMaintenanceReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PositionMaintenanceReport.Tags.EncodedText]);
};

PositionMaintenanceReport.Tags = {
  Parties: '453',
  Instrument: '55',
  InstrmtLegGrp: '555',
  UndInstrmtGrp: '711',
  TrdgSesGrp: '386',
  PositionQty: '702',
  PositionAmountData: '753',
  PosMaintRptID: '721',
  PosTransType: '709',
  PosReqID: '710',
  PosMaintAction: '712',
  OrigPosReqRefID: '713',
  PosMaintStatus: '722',
  PosMaintResult: '723',
  ClearingBusinessDate: '715',
  SettlSessID: '716',
  SettlSessSubID: '717',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  Currency: '15',
  TransactTime: '60',
  AdjustmentType: '718',
  ThresholdAmount: '834',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PositionMaintenanceReport.msgType = 'AM';

module.exports = PositionMaintenanceReport;