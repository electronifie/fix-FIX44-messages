var PegOffsetValue = require('../fields/PegOffsetValue');
var PegMoveType = require('../fields/PegMoveType');
var PegOffsetType = require('../fields/PegOffsetType');
var PegLimitType = require('../fields/PegLimitType');
var PegRoundDirection = require('../fields/PegRoundDirection');
var PegScope = require('../fields/PegScope');

function PegInstructions (pegInstructions) {
  this.message = pegInstructions;
}
/* field */
PegInstructions.prototype.pegOffsetValue = function () {
  return new PegOffsetValue(this.message.tags[PegOffsetValue.Tag]);
};

/* field */
PegInstructions.prototype.pegMoveType = function () {
  return new PegMoveType(this.message.tags[PegMoveType.Tag]);
};

/* field */
PegInstructions.prototype.pegOffsetType = function () {
  return new PegOffsetType(this.message.tags[PegOffsetType.Tag]);
};

/* field */
PegInstructions.prototype.pegLimitType = function () {
  return new PegLimitType(this.message.tags[PegLimitType.Tag]);
};

/* field */
PegInstructions.prototype.pegRoundDirection = function () {
  return new PegRoundDirection(this.message.tags[PegRoundDirection.Tag]);
};

/* field */
PegInstructions.prototype.pegScope = function () {
  return new PegScope(this.message.tags[PegScope.Tag]);
};



PegInstructions.Tag = '211';

module.exports = PegInstructions;