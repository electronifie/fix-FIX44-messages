var invert = require('invert-obj');

function EncryptMethod (encryptMethod) {
  this.message = encryptMethod;
}

EncryptMethod.prototype.value = function () {
  return this.message;
};


EncryptMethod.Keys = {
  'NONE': '0',
  'PKCS': '1',
  'DES': '2',
  'PKCS_DES': '3',
  'PGP_DES': '4',
  'PGP_DES_MD5': '5',
  'PEM_DES_MD5': '6',
};

EncryptMethod.Tag = '98';

EncryptMethod.Type = 'INT';

EncryptMethod.Values = invert(EncryptMethod.Keys);

module.exports = EncryptMethod;