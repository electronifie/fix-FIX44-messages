var NoUnderlyings = require('../fields/NoUnderlyings');
var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var UnderlyingSettlPrice = require('../fields/UnderlyingSettlPrice');
var UnderlyingSettlPriceType = require('../fields/UnderlyingSettlPriceType');

function PosUndInstrmtGrp (posUndInstrmtGrp) {
  this.message = posUndInstrmtGrp;
}

/* group */

/* component */
PosUndInstrmtGrp.prototype.underlyingInstrument = function () {
  return this.message.groups[UnderlyingInstrument.Tag]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

/* field */
PosUndInstrmtGrp.prototype.underlyingSettlPrice = function () {
  return new UnderlyingSettlPrice(this.message.tags[UnderlyingSettlPrice.Tag]);
};

/* field */
PosUndInstrmtGrp.prototype.underlyingSettlPriceType = function () {
  return new UnderlyingSettlPriceType(this.message.tags[UnderlyingSettlPriceType.Tag]);
};

/* end group */

PosUndInstrmtGrp.Tag = '711';

module.exports = PosUndInstrmtGrp;