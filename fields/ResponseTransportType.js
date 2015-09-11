var invert = require('invert-obj');

function ResponseTransportType (responseTransportType) {
  this.message = responseTransportType;
}

ResponseTransportType.prototype.value = function () {
  return this.message;
};


ResponseTransportType.Keys = {
  'INBAND_TRANSPORT_THE_REQUEST_WAS_SENT_OVER': '0',
  'OUT_OF_BAND_PRE_ARRANGED_OUT_OF_BAND_DELIVERY_MECHANISM': '1',
};

ResponseTransportType.Tag = '725';

ResponseTransportType.Type = 'INT';

ResponseTransportType.Values = invert(ResponseTransportType.Keys);

module.exports = ResponseTransportType;