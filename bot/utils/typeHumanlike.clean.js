const {
  getRandomDelay
} = require("../../shared/config");
function splitGraphemes(_0x112608) {
  if (!_0x112608) {
    return [];
  }
  if (typeof Intl !== "undefined" && typeof Intl.Segmenter === "function") {
    const _0x10f84a = new Intl.Segmenter("th", {
      granularity: "grapheme"
    });
    return Array.from(_0x10f84a.segment(_0x112608), _0x2178f2 => _0x2178f2.segment);
  }
  return Array.from(_0x112608);
}
function isEmojiLike(_0x5cd5b4) {
  if (!_0x5cd5b4) {
    return false;
  }
  try {
    const _0x260525 = new RegExp("\\p{Extended_Pictographic}", "u");
    return _0x260525.test(_0x5cd5b4) || /[\u200d\uFE0F\u20e3]/u.test(_0x5cd5b4);
  } catch {
    return /[\u2600-\u27BF]/.test(_0x5cd5b4) || /[\uD83C-\uDBFF][\uDC00-\uDFFF]/.test(_0x5cd5b4);
  }
}
async function typeHumanlike({
  page: _0x2b6f9e,
  locator: _0x3df42a,
  text: _0xd46701,
  typingDelay = 35
}) {
  if (!_0xd46701) {
    return;
  }
  const _0x2a170b = _0x2b6f9e || _0x3df42a && _0x3df42a.page();
  const _0x1d53fd = typeof typingDelay === "object" ? typingDelay : {
    min: Math.max(15, typingDelay - 15),
    max: typingDelay + 25
  };
  if (_0x3df42a) {
    await _0x3df42a.focus().catch(() => {});
  }
  const _0x5a881b = String(_0xd46701).split("\n");
  for (let _0x13c67e = 0; _0x13c67e < _0x5a881b.length; _0x13c67e++) {
    if (_0x13c67e > 0) {
      if (_0x3df42a) {
        await _0x3df42a.press("Shift+Enter").catch(async () => {
          if (_0x2a170b) {
            await _0x2a170b.keyboard.press("Shift+Enter");
          }
        });
      } else if (_0x2a170b) {
        await _0x2a170b.keyboard.press("Shift+Enter");
      }
      if (_0x2a170b) {
        await _0x2a170b.waitForTimeout(120);
      }
    }
    const _0x3b7b07 = splitGraphemes(_0x5a881b[_0x13c67e]);
    for (const _0x2fb096 of _0x3b7b07) {
      if (isEmojiLike(_0x2fb096)) {
        if (_0x3df42a) {
          if (typeof _0x3df42a.pressSequentially === "function") {
            await _0x3df42a.pressSequentially(_0x2fb096, {
              delay: 0
            }).catch(async () => {
              await _0x3df42a.type(_0x2fb096);
            });
          } else {
            await _0x3df42a.type(_0x2fb096);
          }
        } else if (_0x2a170b) {
          await _0x2a170b.keyboard.insertText(_0x2fb096);
        }
      } else if (_0x3df42a) {
        await _0x3df42a.type(_0x2fb096);
      } else if (_0x2a170b) {
        await _0x2a170b.keyboard.type(_0x2fb096);
      }
      const _0xda5b20 = getRandomDelay(_0x1d53fd);
      if (_0xda5b20 > 0 && _0x2a170b) {
        await _0x2a170b.waitForTimeout(_0xda5b20);
      }
    }
  }
}
const _0x469fe2 = {
  splitGraphemes: splitGraphemes,
  isEmojiLike: isEmojiLike,
  typeHumanlike: typeHumanlike
};
module.exports = _0x469fe2;
