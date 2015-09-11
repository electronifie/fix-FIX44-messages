var invert = require('invert-obj');

function ProgRptReqs (progRptReqs) {
  this.message = progRptReqs;
}

ProgRptReqs.prototype.value = function () {
  return this.message;
};


ProgRptReqs.Keys = {
  'BUYSIDE_EXPLICITLY_REQUESTS_STATUS_USING_STATUSREQUEST': '1',
  'SELLSIDE_PERIODICALLY_SENDS_STATUS_USING_LISTSTATUS_PERIOD_OPTIONALLY_SPECIFIED_IN_PROGRESSPERIOD': '2',
  'REAL_TIME_EXECUTION_REPORTS': '3',
};

ProgRptReqs.Tag = '414';

ProgRptReqs.Type = 'INT';

ProgRptReqs.Values = invert(ProgRptReqs.Keys);

module.exports = ProgRptReqs;