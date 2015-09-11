var NoDates = require('../fields/NoDates');
var TradeDate = require('../fields/TradeDate');
var TransactTime = require('../fields/TransactTime');

function TrdCapDtGrp (trdCapDtGrp) {
  this.message = trdCapDtGrp;
}

/* group */

/* field */
TrdCapDtGrp.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[TradeDate.Tag]);
};

/* field */
TrdCapDtGrp.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[TransactTime.Tag]);
};

/* end group */

TrdCapDtGrp.Tag = '580';

module.exports = TrdCapDtGrp;