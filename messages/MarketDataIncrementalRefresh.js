var MDIncGrp = require('../components/MDIncGrp');
var MDReqID = require('../fields/MDReqID');
var ApplQueueDepth = require('../fields/ApplQueueDepth');
var ApplQueueResolution = require('../fields/ApplQueueResolution');

function MarketDataIncrementalRefresh (marketDataIncrementalRefresh) {
  this.message = marketDataIncrementalRefresh;
}

MarketDataIncrementalRefresh.prototype.mdincGrp = function () {
  return this.message.groups[MarketDataIncrementalRefresh.Tags.MDIncGrp]
    .map(function (mdincGrp) {
      return new MDIncGrp(mdincGrp);
  });
};

MarketDataIncrementalRefresh.prototype.mdreqId = function () {
  return new MDReqID(this.message.tags[MarketDataIncrementalRefresh.Tags.MDReqID]);
};

MarketDataIncrementalRefresh.prototype.applQueueDepth = function () {
  return new ApplQueueDepth(this.message.tags[MarketDataIncrementalRefresh.Tags.ApplQueueDepth]);
};

MarketDataIncrementalRefresh.prototype.applQueueResolution = function () {
  return new ApplQueueResolution(this.message.tags[MarketDataIncrementalRefresh.Tags.ApplQueueResolution]);
};

MarketDataIncrementalRefresh.Tags = {
  MDIncGrp: '268',
  MDReqID: '262',
  ApplQueueDepth: '813',
  ApplQueueResolution: '814',
};

MarketDataIncrementalRefresh.msgType = 'X';

module.exports = MarketDataIncrementalRefresh;