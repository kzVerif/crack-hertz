const crypto = require("crypto");
const LICENSE_PUBLIC_KEY = "-----BEGIN PUBLIC KEY-----\nMCowBQYDK2VwAyEA/8qrIavDCJ8B6fSHctHDphqddJznlc6C2mtDfAMppU8=\n-----END PUBLIC KEY-----";
function verifyLicenseToken(_0xdc447a, _0x515453, _0x5da05f) {
  if (!_0xdc447a || typeof _0xdc447a !== "string" || !_0xdc447a.includes(".")) {
    return {
      valid: false,
      reason: "MALFORMED_TOKEN"
    };
  }
  let _0x121012;
  let _0x4dfea7;
  try {
    const [_0x2e4007, _0xb87515] = _0xdc447a.split(".");
    _0x121012 = JSON.parse(Buffer.from(_0x2e4007, "base64url").toString("utf8"));
    _0x4dfea7 = Buffer.from(_0xb87515, "base64url");
    const _0x570214 = crypto.verify(null, Buffer.from(_0x2e4007), LICENSE_PUBLIC_KEY, _0x4dfea7);
    if (!_0x570214) {
      return {
        valid: false,
        reason: "BAD_SIGNATURE"
      };
    }
  } catch {
    return {
      valid: false,
      reason: "MALFORMED_TOKEN"
    };
  }
  if (!_0x515453 || _0x121012.code !== String(_0x515453).trim()) {
    return {
      valid: false,
      reason: "CODE_MISMATCH"
    };
  }
  if (!_0x5da05f || _0x121012.hwid !== String(_0x5da05f).trim()) {
    return {
      valid: false,
      reason: "HWID_MISMATCH"
    };
  }
  const _0x4574d1 = Date.now();
  const _0x2a873e = _0x121012.exp ? new Date(_0x121012.exp).getTime() : 0;
  if (!_0x2a873e || _0x2a873e < _0x4574d1) {
    const _0x30af53 = {
      valid: false,
      reason: "VERIFICATION_EXPIRED",
      expiresAt: _0x121012.exp
    };
    return _0x30af53;
  }
  if (_0x121012.lex) {
    const _0x21013a = new Date(_0x121012.lex).getTime();
    if (_0x21013a < _0x4574d1) {
      const _0x230056 = {
        valid: false,
        reason: "LICENSE_EXPIRED",
        expiresAt: _0x121012.lex
      };
      return _0x230056;
    }
  }
  const _0x100440 = {
    valid: true,
    payload: _0x121012
  };
  return _0x100440;
}
const _0x2c024b = {
  verifyLicenseToken: verifyLicenseToken
};
module.exports = _0x2c024b;
