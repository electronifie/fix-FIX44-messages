var invert = require('invert-obj');

function AllocReportType (allocReportType) {
  this.message = allocReportType;
}

AllocReportType.prototype.value = function () {
  return this.message;
};


AllocReportType.Keys = {
  'SELLSIDE_CALCULATED_USING_PRELIMINARY': '3',
  'SELLSIDE_CALCULATED_WITHOUT_PRELIMINARY': '4',
  'WAREHOUSE_RECAP': '5',
  'REQUEST_TO_INTERMEDIARY': '8',
};

AllocReportType.Tag = '794';

AllocReportType.Type = 'INT';

AllocReportType.Values = invert(AllocReportType.Keys);

module.exports = AllocReportType;