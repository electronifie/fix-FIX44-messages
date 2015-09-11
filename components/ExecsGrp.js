var NoExecs = require('../fields/NoExecs');
var ExecID = require('../fields/ExecID');

function ExecsGrp (execsGrp) {
  this.message = execsGrp;
}

/* group */

/* field */
ExecsGrp.prototype.execId = function () {
  return new ExecID(this.message.tags[ExecID.Tag]);
};

/* end group */

ExecsGrp.Tag = '124';

module.exports = ExecsGrp;