var MDRjctGrp = require('../components/MDRjctGrp');
var MDReqID = require('../fields/MDReqID');
var MDReqRejReason = require('../fields/MDReqRejReason');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function MarketDataRequestReject (marketDataRequestReject) {
  this.message = marketDataRequestReject;
}

MarketDataRequestReject.prototype.mdrjctGrp = function () {
  return this.message.groups[MarketDataRequestReject.Tags.MDRjctGrp]
    .map(function (mdrjctGrp) {
      return new MDRjctGrp(mdrjctGrp);
  });
};

MarketDataRequestReject.prototype.mdreqId = function () {
  return new MDReqID(this.message.tags[MarketDataRequestReject.Tags.MDReqID]);
};

MarketDataRequestReject.prototype.mdreqRejReason = function () {
  return new MDReqRejReason(this.message.tags[MarketDataRequestReject.Tags.MDReqRejReason]);
};

MarketDataRequestReject.prototype.text = function () {
  return new Text(this.message.tags[MarketDataRequestReject.Tags.Text]);
};

MarketDataRequestReject.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[MarketDataRequestReject.Tags.EncodedTextLen]);
};

MarketDataRequestReject.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[MarketDataRequestReject.Tags.EncodedText]);
};

MarketDataRequestReject.Tags = {
  MDRjctGrp: '816',
  MDReqID: '262',
  MDReqRejReason: '281',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

MarketDataRequestReject.msgType = 'Y';

module.exports = MarketDataRequestReject;