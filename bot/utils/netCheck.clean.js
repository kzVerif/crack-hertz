const https = require("https");
const NET_ERROR_PATTERN = /net::ERR_[A-Z_]+|\bENOTFOUND\b|\bECONNRESET\b|\bETIMEDOUT\b|\bECONNREFUSED\b|\bEAI_AGAIN\b|\bEHOSTUNREACH\b|\bENETUNREACH\b|Navigation timeout of .* exceeded|page\.goto: Timeout .* exceeded/i;
function isNetworkErrorText(_0x1f14b6) {
  return NET_ERROR_PATTERN.test(String(_0x1f14b6 || ""));
}
function checkInternet(_0x284b5f = 3000) {
  return new Promise(_0x121398 => {
    try {
      const _0x199e1e = {
        method: "HEAD",
        timeout: _0x284b5f
      };
      const _0x4edd63 = https.request("https://www.google.com/generate_204", _0x199e1e, _0xc00db3 => {
        _0xc00db3.resume();
        _0x121398(_0xc00db3.statusCode >= 200 && _0xc00db3.statusCode < 400);
      });
      _0x4edd63.on("timeout", () => {
        _0x4edd63.destroy();
        _0x121398(false);
      });
      _0x4edd63.on("error", () => _0x121398(false));
      _0x4edd63.end();
    } catch {
      _0x121398(false);
    }
  });
}
const _0x25efbe = {
  checkInternet: checkInternet,
  isNetworkErrorText: isNetworkErrorText,
  NET_ERROR_PATTERN: NET_ERROR_PATTERN
};
module.exports = _0x25efbe;
