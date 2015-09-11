var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var PositionQty = require('../components/PositionQty');
var PositionAmountData = require('../components/PositionAmountData');
var AsgnRptID = require('../fields/AsgnRptID');
var TotNumAssignmentReports = require('../fields/TotNumAssignmentReports');
var LastRptRequested = require('../fields/LastRptRequested');
var Account = require('../fields/Account');
var AccountType = require('../fields/AccountType');
var Currency = require('../fields/Currency');
var ThresholdAmount = require('../fields/ThresholdAmount');
var SettlPrice = require('../fields/SettlPrice');
var SettlPriceType = require('../fields/SettlPriceType');
var UnderlyingSettlPrice = require('../fields/UnderlyingSettlPrice');
var ExpireDate = require('../fields/ExpireDate');
var AssignmentMethod = require('../fields/AssignmentMethod');
var AssignmentUnit = require('../fields/AssignmentUnit');
var OpenInterest = require('../fields/OpenInterest');
var ExerciseMethod = require('../fields/ExerciseMethod');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function AssignmentReport (assignmentReport) {
  this.message = assignmentReport;
}

AssignmentReport.prototype.parties = function () {
  return this.message.groups[AssignmentReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

AssignmentReport.prototype.instrument = function () {
  return this.message.groups[AssignmentReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

AssignmentReport.prototype.instrmtLegGrp = function () {
  return this.message.groups[AssignmentReport.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

AssignmentReport.prototype.undInstrmtGrp = function () {
  return this.message.groups[AssignmentReport.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

AssignmentReport.prototype.positionQty = function () {
  return this.message.groups[AssignmentReport.Tags.PositionQty]
    .map(function (positionQty) {
      return new PositionQty(positionQty);
  });
};

AssignmentReport.prototype.positionAmountData = function () {
  return this.message.groups[AssignmentReport.Tags.PositionAmountData]
    .map(function (positionAmountData) {
      return new PositionAmountData(positionAmountData);
  });
};

AssignmentReport.prototype.asgnRptId = function () {
  return new AsgnRptID(this.message.tags[AssignmentReport.Tags.AsgnRptID]);
};

AssignmentReport.prototype.totNumAssignmentReports = function () {
  return new TotNumAssignmentReports(this.message.tags[AssignmentReport.Tags.TotNumAssignmentReports]);
};

AssignmentReport.prototype.lastRptRequested = function () {
  return new LastRptRequested(this.message.tags[AssignmentReport.Tags.LastRptRequested]);
};

AssignmentReport.prototype.account = function () {
  return new Account(this.message.tags[AssignmentReport.Tags.Account]);
};

AssignmentReport.prototype.accountType = function () {
  return new AccountType(this.message.tags[AssignmentReport.Tags.AccountType]);
};

AssignmentReport.prototype.currency = function () {
  return new Currency(this.message.tags[AssignmentReport.Tags.Currency]);
};

AssignmentReport.prototype.thresholdAmount = function () {
  return new ThresholdAmount(this.message.tags[AssignmentReport.Tags.ThresholdAmount]);
};

AssignmentReport.prototype.settlPrice = function () {
  return new SettlPrice(this.message.tags[AssignmentReport.Tags.SettlPrice]);
};

AssignmentReport.prototype.settlPriceType = function () {
  return new SettlPriceType(this.message.tags[AssignmentReport.Tags.SettlPriceType]);
};

AssignmentReport.prototype.underlyingSettlPrice = function () {
  return new UnderlyingSettlPrice(this.message.tags[AssignmentReport.Tags.UnderlyingSettlPrice]);
};

AssignmentReport.prototype.expireDate = function () {
  return new ExpireDate(this.message.tags[AssignmentReport.Tags.ExpireDate]);
};

AssignmentReport.prototype.assignmentMethod = function () {
  return new AssignmentMethod(this.message.tags[AssignmentReport.Tags.AssignmentMethod]);
};

AssignmentReport.prototype.assignmentUnit = function () {
  return new AssignmentUnit(this.message.tags[AssignmentReport.Tags.AssignmentUnit]);
};

AssignmentReport.prototype.openInterest = function () {
  return new OpenInterest(this.message.tags[AssignmentReport.Tags.OpenInterest]);
};

AssignmentReport.prototype.exerciseMethod = function () {
  return new ExerciseMethod(this.message.tags[AssignmentReport.Tags.ExerciseMethod]);
};

AssignmentReport.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[AssignmentReport.Tags.SettlSessID]);
};

AssignmentReport.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[AssignmentReport.Tags.SettlSessSubID]);
};

AssignmentReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[AssignmentReport.Tags.ClearingBusinessDate]);
};

AssignmentReport.prototype.text = function () {
  return new Text(this.message.tags[AssignmentReport.Tags.Text]);
};

AssignmentReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[AssignmentReport.Tags.EncodedTextLen]);
};

AssignmentReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[AssignmentReport.Tags.EncodedText]);
};

AssignmentReport.Tags = {
  Parties: '453',
  Instrument: '55',
  InstrmtLegGrp: '555',
  UndInstrmtGrp: '711',
  PositionQty: '702',
  PositionAmountData: '753',
  AsgnRptID: '833',
  TotNumAssignmentReports: '832',
  LastRptRequested: '912',
  Account: '1',
  AccountType: '581',
  Currency: '15',
  ThresholdAmount: '834',
  SettlPrice: '730',
  SettlPriceType: '731',
  UnderlyingSettlPrice: '732',
  ExpireDate: '432',
  AssignmentMethod: '744',
  AssignmentUnit: '745',
  OpenInterest: '746',
  ExerciseMethod: '747',
  SettlSessID: '716',
  SettlSessSubID: '717',
  ClearingBusinessDate: '715',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

AssignmentReport.msgType = 'AW';

module.exports = AssignmentReport;