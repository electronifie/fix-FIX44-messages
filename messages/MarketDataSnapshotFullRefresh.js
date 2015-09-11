var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var MDFullGrp = require('../components/MDFullGrp');
var MDReqID = require('../fields/MDReqID');
var FinancialStatus = require('../fields/FinancialStatus');
var CorporateAction = require('../fields/CorporateAction');
var NetChgPrevDay = require('../fields/NetChgPrevDay');
var ApplQueueDepth = require('../fields/ApplQueueDepth');
var ApplQueueResolution = require('../fields/ApplQueueResolution');

function MarketDataSnapshotFullRefresh (marketDataSnapshotFullRefresh) {
  this.message = marketDataSnapshotFullRefresh;
}

MarketDataSnapshotFullRefresh.prototype.instrument = function () {
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

MarketDataSnapshotFullRefresh.prototype.undInstrmtGrp = function () {
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

MarketDataSnapshotFullRefresh.prototype.instrmtLegGrp = function () {
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

MarketDataSnapshotFullRefresh.prototype.mdfullGrp = function () {
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.MDFullGrp]
    .map(function (mdfullGrp) {
      return new MDFullGrp(mdfullGrp);
  });
};

MarketDataSnapshotFullRefresh.prototype.mdreqId = function () {
  return new MDReqID(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MDReqID]);
};

MarketDataSnapshotFullRefresh.prototype.financialStatus = function () {
  return new FinancialStatus(this.message.tags[MarketDataSnapshotFullRefresh.Tags.FinancialStatus]);
};

MarketDataSnapshotFullRefresh.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[MarketDataSnapshotFullRefresh.Tags.CorporateAction]);
};

MarketDataSnapshotFullRefresh.prototype.netChgPrevDay = function () {
  return new NetChgPrevDay(this.message.tags[MarketDataSnapshotFullRefresh.Tags.NetChgPrevDay]);
};

MarketDataSnapshotFullRefresh.prototype.applQueueDepth = function () {
  return new ApplQueueDepth(this.message.tags[MarketDataSnapshotFullRefresh.Tags.ApplQueueDepth]);
};

MarketDataSnapshotFullRefresh.prototype.applQueueResolution = function () {
  return new ApplQueueResolution(this.message.tags[MarketDataSnapshotFullRefresh.Tags.ApplQueueResolution]);
};

MarketDataSnapshotFullRefresh.Tags = {
  Instrument: '55',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  MDFullGrp: '268',
  MDReqID: '262',
  FinancialStatus: '291',
  CorporateAction: '292',
  NetChgPrevDay: '451',
  ApplQueueDepth: '813',
  ApplQueueResolution: '814',
};

MarketDataSnapshotFullRefresh.msgType = 'W';

module.exports = MarketDataSnapshotFullRefresh;