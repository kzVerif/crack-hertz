const COOLDOWN_SETTING_KEY = "rate_limit_cooldown";
const COOLDOWN_MS = 86400000;
async function readCooldownMap(_0x4ab7d3) {
  try {
    const _0x30f2fc = {
      key: COOLDOWN_SETTING_KEY
    };
    const _0x2a1eaa = {
      where: _0x30f2fc
    };
    const _0xbab5ba = await _0x4ab7d3.setting.findUnique(_0x2a1eaa);
    if (!_0xbab5ba || !_0xbab5ba.value) {
      return {};
    }
    const _0x368680 = JSON.parse(_0xbab5ba.value);
    if (_0x368680 && typeof _0x368680 === "object") {
      return _0x368680;
    } else {
      return {};
    }
  } catch {
    return {};
  }
}
async function writeCooldownMap(_0x407409, _0x1ac900) {
  const _0x45d50b = {
    key: COOLDOWN_SETTING_KEY
  };
  await _0x407409.setting.upsert({
    where: _0x45d50b,
    create: {
      key: COOLDOWN_SETTING_KEY,
      value: JSON.stringify(_0x1ac900)
    },
    update: {
      value: JSON.stringify(_0x1ac900)
    }
  });
}
async function markRateLimited(_0x1a3117, _0x4e63f8, _0x97d7c2 = "") {
  const _0x38d7da = await readCooldownMap(_0x1a3117);
  const _0x19a94a = {
    until: Date.now() + COOLDOWN_MS,
    reason: String(_0x97d7c2 || "")
  };
  _0x38d7da[String(_0x4e63f8)] = _0x19a94a;
  await writeCooldownMap(_0x1a3117, _0x38d7da);
  return _0x19a94a;
}
async function getRateLimitInfo(_0x471405, _0x52f69a) {
  const _0x141831 = await readCooldownMap(_0x471405);
  const _0x3c0ff7 = _0x141831[String(_0x52f69a)];
  if (!_0x3c0ff7 || typeof _0x3c0ff7.until !== "number") {
    return {
      limited: false,
      remainingMs: 0
    };
  }
  if (Date.now() >= _0x3c0ff7.until) {
    delete _0x141831[String(_0x52f69a)];
    try {
      await writeCooldownMap(_0x471405, _0x141831);
    } catch {}
    return {
      limited: false,
      remainingMs: 0
    };
  }
  return {
    limited: true,
    until: _0x3c0ff7.until,
    reason: _0x3c0ff7.reason || "",
    remainingMs: _0x3c0ff7.until - Date.now()
  };
}
async function isRateLimited(_0x376197, _0x49644f) {
  const _0x43e05e = await getRateLimitInfo(_0x376197, _0x49644f);
  return _0x43e05e.limited;
}
async function clearRateLimit(_0x3e0172, _0x47f6c1) {
  const _0x151e24 = await readCooldownMap(_0x3e0172);
  if (!_0x151e24[String(_0x47f6c1)]) {
    return;
  }
  delete _0x151e24[String(_0x47f6c1)];
  await writeCooldownMap(_0x3e0172, _0x151e24);
}
function formatRemaining(_0x307120) {
  const _0x5f3874 = Math.max(1, Math.ceil(_0x307120 / 60000));
  const _0x125655 = Math.floor(_0x5f3874 / 60);
  const _0x52957a = _0x5f3874 % 60;
  if (_0x125655 > 0) {
    return _0x125655 + " ชม. " + _0x52957a + " นาที";
  } else {
    return _0x52957a + " นาที";
  }
}
const _0x4d4123 = {
  COOLDOWN_MS: COOLDOWN_MS,
  COOLDOWN_SETTING_KEY: COOLDOWN_SETTING_KEY,
  markRateLimited: markRateLimited,
  getRateLimitInfo: getRateLimitInfo,
  isRateLimited: isRateLimited,
  clearRateLimit: clearRateLimit,
  formatRemaining: formatRemaining
};
module.exports = _0x4d4123;
