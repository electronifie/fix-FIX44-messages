var invert = require('invert-obj');

function UnderlyingRepoCollateralSecurityType (underlyingRepoCollateralSecurityType) {
  this.message = underlyingRepoCollateralSecurityType;
}

UnderlyingRepoCollateralSecurityType.prototype.value = function () {
  return this.message;
};

UnderlyingRepoCollateralSecurityType.Tag = '243';

UnderlyingRepoCollateralSecurityType.Type = 'STRING';

module.exports = UnderlyingRepoCollateralSecurityType;