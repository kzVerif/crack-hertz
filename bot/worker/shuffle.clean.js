const {
  log
} = require("../logger");
const STATE_KEY_PREFIX = "shuffleState:";
const DEFAULT_MAX_SIMILARITY = 0.2;
const DEFAULT_MAX_TRIES = 12;
function shuffleArray(_0x3e970e) {
  const _0x4aedf1 = _0x3e970e.slice();
  for (let _0xc71a0a = _0x4aedf1.length - 1; _0xc71a0a > 0; _0xc71a0a--) {
    const _0x1de897 = Math.floor(Math.random() * (_0xc71a0a + 1));
    [_0x4aedf1[_0xc71a0a], _0x4aedf1[_0x1de897]] = [_0x4aedf1[_0x1de897], _0x4aedf1[_0xc71a0a]];
  }
  return _0x4aedf1;
}
function countSharedAdjacentPairs(_0x2ca7f4, _0x53b551) {
  if (_0x2ca7f4.length < 2 || _0x53b551.length < 2) {
    return 0;
  }
  const _0x3cd983 = new Set();
  for (let _0x327d85 = 0; _0x327d85 < _0x53b551.length - 1; _0x327d85++) {
    _0x3cd983.add(_0x53b551[_0x327d85] + "\0" + _0x53b551[_0x327d85 + 1]);
  }
  let _0x64d67a = 0;
  for (let _0x728a47 = 0; _0x728a47 < _0x2ca7f4.length - 1; _0x728a47++) {
    if (_0x3cd983.has(_0x2ca7f4[_0x728a47] + "\0" + _0x2ca7f4[_0x728a47 + 1])) {
      _0x64d67a++;
    }
  }
  return _0x64d67a;
}
function countFixedPoints(_0x5ba565, _0x58f138) {
  const _0x4c4418 = Math.min(_0x5ba565.length, _0x58f138.length);
  let _0x39952b = 0;
  for (let _0x34fd46 = 0; _0x34fd46 < _0x4c4418; _0x34fd46++) {
    if (_0x5ba565[_0x34fd46] === _0x58f138[_0x34fd46]) {
      _0x39952b++;
    }
  }
  return _0x39952b;
}
function measureSimilarity(_0x22c284, _0x56e99b) {
  const _0x5ca56c = _0x22c284.length;
  if (_0x5ca56c <= 1) {
    return 0;
  }
  const _0x13f94f = countSharedAdjacentPairs(_0x22c284, _0x56e99b) / Math.max(1, _0x5ca56c - 1);
  const _0x4b87a6 = countFixedPoints(_0x22c284, _0x56e99b) / _0x5ca56c;
  return Math.max(_0x13f94f, _0x4b87a6);
}
function shuffleNoRepeat(_0x1cdfb3, _0x520e49 = [], _0x593a99 = {}) {
  const _0x1b6c4e = typeof _0x593a99.maxSimilarity === "number" ? _0x593a99.maxSimilarity : DEFAULT_MAX_SIMILARITY;
  const _0x5c216c = typeof _0x593a99.maxTries === "number" ? _0x593a99.maxTries : DEFAULT_MAX_TRIES;
  if (!Array.isArray(_0x1cdfb3) || _0x1cdfb3.length <= 1) {
    return {
      order: Array.isArray(_0x1cdfb3) ? _0x1cdfb3.slice() : [],
      similarity: 0,
      tries: 0
    };
  }
  const _0x16ac1b = Array.isArray(_0x520e49) ? _0x520e49.filter(_0x1ca21a => _0x1cdfb3.includes(_0x1ca21a)) : [];
  let _0x5f3736 = null;
  let _0x14ef4d = Infinity;
  let _0x21d416 = 0;
  for (let _0x10437d = 1; _0x10437d <= _0x5c216c; _0x10437d++) {
    _0x21d416 = _0x10437d;
    const _0xd00be0 = shuffleArray(_0x1cdfb3);
    let _0xd9a9fb = _0x16ac1b.length ? measureSimilarity(_0xd00be0, _0x16ac1b) : 0;
    if (_0x16ac1b.length && _0xd00be0[0] === _0x16ac1b[0]) {
      _0xd9a9fb += 1;
    }
    if (_0xd9a9fb < _0x14ef4d) {
      _0x14ef4d = _0xd9a9fb;
      _0x5f3736 = _0xd00be0;
    }
    if (_0x14ef4d <= _0x1b6c4e) {
      break;
    }
  }
  return {
    order: _0x5f3736 || shuffleArray(_0x1cdfb3),
    similarity: _0x14ef4d === Infinity ? 0 : Math.min(_0x14ef4d, 1),
    tries: _0x21d416
  };
}
async function loadShuffleState(_0x11d362) {
  try {
    const _0x503c0c = require("../../electron/db/prisma");
    const _0x25e13a = await _0x503c0c.setting.findUnique({
      where: {
        key: STATE_KEY_PREFIX + String(_0x11d362)
      }
    });
    if (_0x25e13a && _0x25e13a.value) {
      const _0x2c6b61 = JSON.parse(_0x25e13a.value);
      if (_0x2c6b61 && typeof _0x2c6b61 === "object") {
        return {
          groups: Array.isArray(_0x2c6b61.groups) ? _0x2c6b61.groups : [],
          links: _0x2c6b61.links && typeof _0x2c6b61.links === "object" ? _0x2c6b61.links : {}
        };
      }
    }
  } catch (_0x45e6d7) {
    log("warn", "[SHUFFLE] โหลดลำดับรอบก่อนไม่สำเร็จ (จะสุ่มอิสระแทน): " + _0x45e6d7.message);
  }
  return {
    groups: [],
    links: {}
  };
}
async function saveShuffleState(_0x3f7aae, _0x16d14a) {
  try {
    const _0x2f23e8 = require("../../electron/db/prisma");
    await _0x2f23e8.setting.upsert({
      where: {
        key: STATE_KEY_PREFIX + String(_0x3f7aae)
      },
      create: {
        key: STATE_KEY_PREFIX + String(_0x3f7aae),
        value: JSON.stringify(_0x16d14a)
      },
      update: {
        value: JSON.stringify(_0x16d14a)
      }
    });
    return true;
  } catch (_0x18e991) {
    log("warn", "[SHUFFLE] บันทึกลำดับรอบปัจจุบันไม่สำเร็จ: " + _0x18e991.message);
    return false;
  }
}
const _0x5a2cef = {
  shuffleArray: shuffleArray,
  countSharedAdjacentPairs: countSharedAdjacentPairs,
  countFixedPoints: countFixedPoints,
  measureSimilarity: measureSimilarity,
  shuffleNoRepeat: shuffleNoRepeat,
  loadShuffleState: loadShuffleState,
  saveShuffleState: saveShuffleState,
  STATE_KEY_PREFIX: STATE_KEY_PREFIX
};
module.exports = _0x5a2cef;
