const ALLOWED_REACTIONS = ["LIKE", "LOVE", "CARE", "HAHA", "WOW", "SAD", "ANGRY"];
function extractValidLinks(_0x2163ac) {
  if (!_0x2163ac) {
    return [];
  }
  let _0x4df687 = [];
  if (Array.isArray(_0x2163ac)) {
    _0x4df687 = _0x2163ac.map(_0x406cdc => {
      if (typeof _0x406cdc === "string") {
        return _0x406cdc.trim();
      }
      if (_0x406cdc && typeof _0x406cdc === "object" && _0x406cdc.url) {
        return String(_0x406cdc.url).trim();
      }
      return "";
    }).filter(Boolean);
  } else if (typeof _0x2163ac === "string") {
    _0x4df687 = _0x2163ac.split(/\r?\n/).map(_0x1a8f35 => _0x1a8f35.trim()).filter(Boolean);
  }
  return _0x4df687;
}
function countTotalImages(_0x5d9c84 = {}) {
  let _0x2e5e69 = 0;
  if (Array.isArray(_0x5d9c84.images)) {
    _0x2e5e69 += _0x5d9c84.images.filter(Boolean).length;
  }
  if (Array.isArray(_0x5d9c84.newImages)) {
    _0x2e5e69 += _0x5d9c84.newImages.filter(Boolean).length;
  }
  if (Array.isArray(_0x5d9c84.existingImages)) {
    _0x2e5e69 += _0x5d9c84.existingImages.filter(Boolean).length;
  }
  if (typeof _0x5d9c84.imageCount === "number" && _0x5d9c84.imageCount > 0) {
    _0x2e5e69 = Math.max(_0x2e5e69, _0x5d9c84.imageCount);
  }
  return _0x2e5e69;
}
function validateGroup(_0x277bdf = {}) {
  const _0x5e1292 = {};
  const _0x2f9df7 = _0x277bdf.name != null ? String(_0x277bdf.name).trim() : "";
  if (!_0x2f9df7) {
    _0x5e1292.name = "กรุณาระบุชื่อกลุ่ม (Group name is required)";
  }
  const _0xe94b27 = _0x277bdf.link !== undefined ? _0x277bdf.link : _0x277bdf.links;
  const _0x5ae973 = extractValidLinks(_0xe94b27);
  if (_0x5ae973.length === 0) {
    _0x5e1292.link = "กรุณาระบุลิงก์กลุ่มเป้าหมายอย่างน้อย 1 ลิงก์ (At least 1 group link is required)";
  }
  const _0x390848 = _0x277bdf.content != null ? String(_0x277bdf.content).trim() : "";
  const _0x3ccf98 = countTotalImages(_0x277bdf);
  const _0x53e569 = _0x390848.length > 0;
  const _0x2c8c4d = _0x3ccf98 > 0;
  if (!_0x53e569 && !_0x2c8c4d) {
    _0x5e1292.contentOrImage = "ต้องระบุข้อความโพสต์ (Content) หรือรูปภาพ (Image) อย่างน้อย 1 อย่าง";
  }
  let _0x2c0878 = "";
  if (_0x277bdf.reaction != null && String(_0x277bdf.reaction).trim() !== "") {
    const _0x3e6812 = String(_0x277bdf.reaction).trim().toUpperCase();
    if (ALLOWED_REACTIONS.includes(_0x3e6812)) {
      _0x2c0878 = _0x3e6812;
    } else {
      _0x5e1292.reaction = "Reaction ไม่ถูกต้อง (รองรับ: " + ALLOWED_REACTIONS.join(", ") + ")";
    }
  }
  let _0x1ca58e = "";
  if (_0x277bdf.comments != null) {
    _0x1ca58e = String(_0x277bdf.comments).trim();
  } else if (_0x277bdf.comment != null) {
    _0x1ca58e = String(_0x277bdf.comment).trim();
  }
  const _0x4024b8 = Object.keys(_0x5e1292).length === 0;
  const _0x173e6b = _0x5e1292.name || _0x5e1292.link || _0x5e1292.contentOrImage || _0x5e1292.reaction || "";
  const _0x2e24a7 = {
    name: _0x2f9df7,
    links: _0x5ae973,
    content: _0x390848,
    comments: _0x1ca58e,
    reaction: _0x2c0878,
    images: Array.isArray(_0x277bdf.images) ? _0x277bdf.images : [],
    existingImages: Array.isArray(_0x277bdf.existingImages) ? _0x277bdf.existingImages : [],
    newImages: Array.isArray(_0x277bdf.newImages) ? _0x277bdf.newImages : [],
    totalImagesCount: _0x3ccf98,
    randomContent: Boolean(_0x277bdf.randomContent),
    randomImage: Boolean(_0x277bdf.randomImage),
    randomReaction: Boolean(_0x277bdf.randomReaction)
  };
  const _0x3f2b16 = {
    isValid: _0x4024b8,
    errors: _0x5e1292,
    message: _0x173e6b,
    sanitizedData: _0x2e24a7
  };
  return _0x3f2b16;
}
function isValidGroup(_0x17a196) {
  return validateGroup(_0x17a196).isValid;
}
const _0x1c0f2d = {
  validateGroup: validateGroup,
  isValidGroup: isValidGroup,
  ALLOWED_REACTIONS: ALLOWED_REACTIONS,
  extractValidLinks: extractValidLinks,
  countTotalImages: countTotalImages
};
module.exports = _0x1c0f2d;
module.exports.default = validateGroup;
