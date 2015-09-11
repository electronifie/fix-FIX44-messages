var NoAllocs = require('../fields/NoAllocs');
var AllocAccount = require('../fields/AllocAccount');
var AllocAcctIDSource = require('../fields/AllocAcctIDSource');
var AllocPrice = require('../fields/AllocPrice');
var IndividualAllocID = require('../fields/IndividualAllocID');
var IndividualAllocRejCode = require('../fields/IndividualAllocRejCode');
var AllocText = require('../fields/AllocText');
var EncodedAllocTextLen = require('../fields/EncodedAllocTextLen');
var EncodedAllocText = require('../fields/EncodedAllocText');

function AllocAckGrp (allocAckGrp) {
  this.message = allocAckGrp;
}

/* group */

/* field */
AllocAckGrp.prototype.allocAccount = function () {
  return new AllocAccount(this.message.tags[AllocAccount.Tag]);
};

/* field */
AllocAckGrp.prototype.allocAcctIdsource = function () {
  return new AllocAcctIDSource(this.message.tags[AllocAcctIDSource.Tag]);
};

/* field */
AllocAckGrp.prototype.allocPrice = function () {
  return new AllocPrice(this.message.tags[AllocPrice.Tag]);
};

/* field */
AllocAckGrp.prototype.individualAllocId = function () {
  return new IndividualAllocID(this.message.tags[IndividualAllocID.Tag]);
};

/* field */
AllocAckGrp.prototype.individualAllocRejCode = function () {
  return new IndividualAllocRejCode(this.message.tags[IndividualAllocRejCode.Tag]);
};

/* field */
AllocAckGrp.prototype.allocText = function () {
  return new AllocText(this.message.tags[AllocText.Tag]);
};

/* field */
AllocAckGrp.prototype.encodedAllocTextLen = function () {
  return new EncodedAllocTextLen(this.message.tags[EncodedAllocTextLen.Tag]);
};

/* field */
AllocAckGrp.prototype.encodedAllocText = function () {
  return new EncodedAllocText(this.message.tags[EncodedAllocText.Tag]);
};

/* end group */

AllocAckGrp.Tag = '78';

module.exports = AllocAckGrp;