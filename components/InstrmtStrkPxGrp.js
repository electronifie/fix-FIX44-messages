var NoStrikes = require('../fields/NoStrikes');
var Instrument = require('../components/Instrument');

function InstrmtStrkPxGrp (instrmtStrkPxGrp) {
  this.message = instrmtStrkPxGrp;
}

/* group */

/* component */
InstrmtStrkPxGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* end group */

InstrmtStrkPxGrp.Tag = '428';

module.exports = InstrmtStrkPxGrp;