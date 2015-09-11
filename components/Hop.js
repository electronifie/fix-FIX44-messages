var NoHops = require('../fields/NoHops');
var HopCompID = require('../fields/HopCompID');
var HopSendingTime = require('../fields/HopSendingTime');
var HopRefID = require('../fields/HopRefID');

function Hop (hop) {
  this.message = hop;
}

/* group */

/* field */
Hop.prototype.hopCompId = function () {
  return new HopCompID(this.message.tags[HopCompID.Tag]);
};

/* field */
Hop.prototype.hopSendingTime = function () {
  return new HopSendingTime(this.message.tags[HopSendingTime.Tag]);
};

/* field */
Hop.prototype.hopRefId = function () {
  return new HopRefID(this.message.tags[HopRefID.Tag]);
};

/* end group */

Hop.Tag = '627';

module.exports = Hop;