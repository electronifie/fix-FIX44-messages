var NoTrdRegTimestamps = require('../fields/NoTrdRegTimestamps');
var TrdRegTimestamp = require('../fields/TrdRegTimestamp');
var TrdRegTimestampType = require('../fields/TrdRegTimestampType');
var TrdRegTimestampOrigin = require('../fields/TrdRegTimestampOrigin');

function TrdRegTimestamps (trdRegTimestamps) {
  this.message = trdRegTimestamps;
}

/* group */

/* field */
TrdRegTimestamps.prototype.trdRegTimestamp = function () {
  return new TrdRegTimestamp(this.message.tags[TrdRegTimestamp.Tag]);
};

/* field */
TrdRegTimestamps.prototype.trdRegTimestampType = function () {
  return new TrdRegTimestampType(this.message.tags[TrdRegTimestampType.Tag]);
};

/* field */
TrdRegTimestamps.prototype.trdRegTimestampOrigin = function () {
  return new TrdRegTimestampOrigin(this.message.tags[TrdRegTimestampOrigin.Tag]);
};

/* end group */

TrdRegTimestamps.Tag = '768';

module.exports = TrdRegTimestamps;