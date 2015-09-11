var NoLegs = require('../fields/NoLegs');
var InstrumentLeg = require('../components/InstrumentLeg');
var LegStipulations = require('../components/LegStipulations');
var NestedParties = require('../components/NestedParties');
var LegQty = require('../fields/LegQty');
var LegSwapType = require('../fields/LegSwapType');
var LegPositionEffect = require('../fields/LegPositionEffect');
var LegCoveredOrUncovered = require('../fields/LegCoveredOrUncovered');
var LegRefID = require('../fields/LegRefID');
var LegPrice = require('../fields/LegPrice');
var LegSettlType = require('../fields/LegSettlType');
var LegSettlDate = require('../fields/LegSettlDate');
var LegLastPx = require('../fields/LegLastPx');

function TrdInstrmtLegGrp (trdInstrmtLegGrp) {
  this.message = trdInstrmtLegGrp;
}

/* group */

/* component */
TrdInstrmtLegGrp.prototype.instrumentLeg = function () {
  return this.message.groups[InstrumentLeg.Tag]
    .map(function (instrumentLeg) {
      return new InstrumentLeg(instrumentLeg);
  });
};

/* component */
TrdInstrmtLegGrp.prototype.legStipulations = function () {
  return this.message.groups[LegStipulations.Tag]
    .map(function (legStipulations) {
      return new LegStipulations(legStipulations);
  });
};

/* component */
TrdInstrmtLegGrp.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* field */
TrdInstrmtLegGrp.prototype.legQty = function () {
  return new LegQty(this.message.tags[LegQty.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legSwapType = function () {
  return new LegSwapType(this.message.tags[LegSwapType.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legPositionEffect = function () {
  return new LegPositionEffect(this.message.tags[LegPositionEffect.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legCoveredOrUncovered = function () {
  return new LegCoveredOrUncovered(this.message.tags[LegCoveredOrUncovered.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legRefId = function () {
  return new LegRefID(this.message.tags[LegRefID.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legPrice = function () {
  return new LegPrice(this.message.tags[LegPrice.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legSettlType = function () {
  return new LegSettlType(this.message.tags[LegSettlType.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legSettlDate = function () {
  return new LegSettlDate(this.message.tags[LegSettlDate.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legLastPx = function () {
  return new LegLastPx(this.message.tags[LegLastPx.Tag]);
};

/* end group */

TrdInstrmtLegGrp.Tag = '555';

module.exports = TrdInstrmtLegGrp;