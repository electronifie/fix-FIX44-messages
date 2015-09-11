var invert = require('invert-obj');

function ReportToExch (reportToExch) {
  this.message = reportToExch;
}

ReportToExch.prototype.value = function () {
  return this.message;
};


ReportToExch.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

ReportToExch.Tag = '113';

ReportToExch.Type = 'BOOLEAN';

ReportToExch.Values = invert(ReportToExch.Keys);

module.exports = ReportToExch;