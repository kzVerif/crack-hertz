const VENDOR_WEBHOOK_URL = "";
const DEFAULT_CONFIG = {
  hideScreen: false,
  autoUpdate: true,
  skipPending: true,
  remoteSyncEnabled: false,
  screenShareEnabled: false,
  webhook: {
    enabled: false,
    url: ""
  },
  delay: {
    min: 3,
    max: 10
  },
  delayBetweenLinks: {
    min: 5,
    max: 15
  },
  delayBetweenGroups: {
    min: 15,
    max: 50
  },
  nextRoundDelay: {
    min: 10800,
    max: 21600
  },
  textMode: "typing",
  typingDelay: {
    min: 20,
    max: 60
  }
};
function sanitizeRange(_0x581e96, _0x343feb) {
  let _0x5f1fc9 = _0x581e96 && typeof _0x581e96.min === "number" && !isNaN(_0x581e96.min) ? _0x581e96.min : _0x343feb.min;
  let _0x293876 = _0x581e96 && typeof _0x581e96.max === "number" && !isNaN(_0x581e96.max) ? _0x581e96.max : _0x343feb.max;
  _0x5f1fc9 = Math.max(0, _0x5f1fc9);
  _0x293876 = Math.max(0, _0x293876);
  if (_0x5f1fc9 > _0x293876) {
    const _0x30c654 = _0x5f1fc9;
    _0x5f1fc9 = _0x293876;
    _0x293876 = _0x30c654;
  }
  const _0x19b397 = {
    min: _0x5f1fc9,
    max: _0x293876
  };
  return _0x19b397;
}
function validateConfig(_0x1eeced = {}) {
  const _0x3f3eca = typeof _0x1eeced === "object" && _0x1eeced !== null ? _0x1eeced : {};
  const _0x4d840f = typeof _0x3f3eca.hideScreen === "boolean" ? _0x3f3eca.hideScreen : DEFAULT_CONFIG.hideScreen;
  const _0x2f8f2d = typeof _0x3f3eca.autoUpdate === "boolean" ? _0x3f3eca.autoUpdate : DEFAULT_CONFIG.autoUpdate;
  const _0x3425d1 = typeof _0x3f3eca.skipPending === "boolean" ? _0x3f3eca.skipPending : DEFAULT_CONFIG.skipPending;
  const _0x2a9921 = typeof _0x3f3eca.remoteSyncEnabled === "boolean" ? _0x3f3eca.remoteSyncEnabled : DEFAULT_CONFIG.remoteSyncEnabled;
  const _0x38d3d8 = typeof _0x3f3eca.screenShareEnabled === "boolean" ? _0x3f3eca.screenShareEnabled : DEFAULT_CONFIG.screenShareEnabled;
  const _0x129ff9 = {
    enabled: typeof _0x3f3eca.webhook?.enabled === "boolean" ? _0x3f3eca.webhook.enabled : DEFAULT_CONFIG.webhook.enabled,
    url: typeof _0x3f3eca.webhook?.url === "string" ? _0x3f3eca.webhook.url.trim() : ""
  };
  const _0x1038c1 = sanitizeRange(_0x3f3eca.delay, DEFAULT_CONFIG.delay);
  const _0x381ce2 = sanitizeRange(_0x3f3eca.delayBetweenLinks, DEFAULT_CONFIG.delayBetweenLinks);
  const _0x57c348 = sanitizeRange(_0x3f3eca.delayBetweenGroups, DEFAULT_CONFIG.delayBetweenGroups);
  const _0x3fd99e = sanitizeRange(_0x3f3eca.nextRoundDelay, DEFAULT_CONFIG.nextRoundDelay);
  const _0x39df99 = _0x3f3eca.textMode === "paste" ? "paste" : "typing";
  const _0x2ec208 = sanitizeRange(_0x3f3eca.typingDelay, DEFAULT_CONFIG.typingDelay);
  const _0x71ce80 = {
    ..._0x3f3eca
  };
  _0x71ce80.hideScreen = _0x4d840f;
  _0x71ce80.autoUpdate = _0x2f8f2d;
  _0x71ce80.skipPending = _0x3425d1;
  _0x71ce80.remoteSyncEnabled = _0x2a9921;
  _0x71ce80.screenShareEnabled = _0x38d3d8;
  _0x71ce80.webhook = _0x129ff9;
  _0x71ce80.delay = _0x1038c1;
  _0x71ce80.delayBetweenLinks = _0x381ce2;
  _0x71ce80.delayBetweenGroups = _0x57c348;
  _0x71ce80.nextRoundDelay = _0x3fd99e;
  _0x71ce80.textMode = _0x39df99;
  _0x71ce80.typingDelay = _0x2ec208;
  return _0x71ce80;
}
function getRandomDelay(_0x50293f) {
  const {
    min: _0x2cde8a,
    max: _0x2910ce
  } = sanitizeRange(_0x50293f, {
    min: 1,
    max: 2
  });
  if (_0x2cde8a === _0x2910ce) {
    return _0x2cde8a;
  }
  const _0x33d9fe = Math.random() * (_0x2910ce - _0x2cde8a) + _0x2cde8a;
  return Number(_0x33d9fe.toFixed(2));
}
function getRandomInt(_0x33f432, _0x162159) {
  const _0x4ddeb1 = Math.ceil(Math.min(_0x33f432, _0x162159));
  const _0x3be246 = Math.floor(Math.max(_0x33f432, _0x162159));
  return Math.floor(Math.random() * (_0x3be246 - _0x4ddeb1 + 1)) + _0x4ddeb1;
}
function sleep(_0x11933e) {
  return new Promise(_0x431333 => setTimeout(_0x431333, _0x11933e));
}
async function sleepInterruptible(_0x13814a, _0x213751, _0x5b1070 = 250) {
  const _0x21bcc8 = Date.now();
  while (Date.now() - _0x21bcc8 < _0x13814a) {
    if (typeof _0x213751 === "function" && _0x213751()) {
      return false;
    }
    const _0x47b4be = _0x13814a - (Date.now() - _0x21bcc8);
    const _0x46e43d = Math.min(_0x47b4be, _0x5b1070);
    if (_0x46e43d > 0) {
      await sleep(_0x46e43d);
    }
  }
  return true;
}
const _0x21945e = {
  DEFAULT_CONFIG: DEFAULT_CONFIG,
  validateConfig: validateConfig,
  sanitizeRange: sanitizeRange,
  getRandomDelay: getRandomDelay,
  getRandomInt: getRandomInt,
  sleep: sleep,
  sleepInterruptible: sleepInterruptible,
  VENDOR_WEBHOOK_URL: VENDOR_WEBHOOK_URL
};
module.exports = _0x21945e;
