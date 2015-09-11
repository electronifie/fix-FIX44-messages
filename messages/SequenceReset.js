var GapFillFlag = require('../fields/GapFillFlag');
var NewSeqNo = require('../fields/NewSeqNo');

function SequenceReset (sequenceReset) {
  this.message = sequenceReset;
}

SequenceReset.prototype.gapFillFlag = function () {
  return new GapFillFlag(this.message.tags[SequenceReset.Tags.GapFillFlag]);
};

SequenceReset.prototype.newSeqNo = function () {
  return new NewSeqNo(this.message.tags[SequenceReset.Tags.NewSeqNo]);
};

SequenceReset.Tags = {
  GapFillFlag: '123',
  NewSeqNo: '36',
};

SequenceReset.msgType = '4';

module.exports = SequenceReset;