const http = require("http");
const https = require("https");
const {
  prisma
} = require("../db");
const {
  getHwid
} = require("../../shared/hwid");
const {
  verifyLicenseToken
} = require("../../shared/license");
const LICENSE_TOKEN_SETTING_KEY = "license_token";
const SERVER_BASE_URL = (process.env.HERTZ_SERVER_URL || "https://hertzx.xyz").replace(/\/+$/, "");
function getServerUrls() {
  const _0x3a5695 = process.env.HERTZ_SERVER_URL;
  if (_0x3a5695 && _0x3a5695.trim()) {
    return [_0x3a5695.trim().replace(/\/+$/, "")];
  }
  return ["https://hertzx.xyz", "http://127.0.0.1:3000", "http://localhost:3000"];
}
function sendJsonRequest(_0x3155a0, _0x312836 = "POST", _0x19ce2d = null) {
  return new Promise((_0x10e017, _0x4dae82) => {
    try {
      const _0x456e1e = new URL(_0x3155a0);
      const _0x342616 = _0x456e1e.protocol === "https:" ? https : http;
      const _0x5b55ce = _0x19ce2d ? JSON.stringify(_0x19ce2d) : null;
      const _0x51433c = {};
      if (_0x5b55ce) {
        _0x51433c["Content-Type"] = "application/json";
        _0x51433c["Content-Length"] = Buffer.byteLength(_0x5b55ce);
      }
      const _0x390a10 = _0x342616.request({
        hostname: _0x456e1e.hostname,
        port: _0x456e1e.port || (_0x456e1e.protocol === "https:" ? 443 : 80),
        path: _0x456e1e.pathname + _0x456e1e.search,
        method: _0x312836,
        headers: _0x51433c,
        timeout: 6000
      }, _0x1e1cea => {
        let _0x3cf667 = "";
        _0x1e1cea.setEncoding("utf8");
        _0x1e1cea.on("data", _0x5e42ab => {
          _0x3cf667 += _0x5e42ab;
        });
        _0x1e1cea.on("end", () => {
          try {
            const _0x39d4e1 = JSON.parse(_0x3cf667);
            const _0x3b3168 = {
              statusCode: _0x1e1cea.statusCode,
              data: _0x39d4e1
            };
            _0x10e017(_0x3b3168);
          } catch {
            _0x10e017({
              statusCode: _0x1e1cea.statusCode,
              data: {
                error: _0x3cf667 || "Invalid JSON response from server"
              }
            });
          }
        });
      });
      _0x390a10.on("error", _0x4ede3d => {
        let _0x24a6fb = _0x4ede3d.message || _0x4ede3d.code || "Network error";
        if (_0x4ede3d.code === "ECONNREFUSED") {
          _0x24a6fb = "เซิร์ฟเวอร์ยังไม่ได้เปิดทำงาน (" + _0x456e1e.hostname + ":" + (_0x456e1e.port || 80) + " ไม่ได้เปิดอยู่)";
        }
        _0x4dae82(new Error(_0x24a6fb));
      });
      _0x390a10.on("timeout", () => {
        _0x390a10.destroy();
        _0x4dae82(new Error("Request timeout"));
      });
      if (_0x5b55ce) {
        _0x390a10.write(_0x5b55ce);
      }
      _0x390a10.end();
    } catch (_0xc506d6) {
      _0x4dae82(_0xc506d6);
    }
  });
}
function getMachineHwid() {
  return getHwid();
}
async function saveLicenseToken(_0x4ab8fb) {
  if (!_0x4ab8fb || typeof _0x4ab8fb !== "string") {
    return;
  }
  try {
    const _0x2a9a4c = {
      key: LICENSE_TOKEN_SETTING_KEY
    };
    const _0x18f624 = {
      key: LICENSE_TOKEN_SETTING_KEY,
      value: _0x4ab8fb
    };
    const _0x20c89f = {
      value: _0x4ab8fb
    };
    const _0x10564d = {
      where: _0x2a9a4c,
      create: _0x18f624,
      update: _0x20c89f
    };
    await prisma.setting.upsert(_0x10564d);
  } catch (_0x41fdb6) {
    console.error("[AUTH SERVICE] Failed to save license token:", _0x41fdb6.message);
  }
}
async function loadLicenseToken() {
  try {
    const _0x1edb9e = {
      key: LICENSE_TOKEN_SETTING_KEY
    };
    const _0x1708ac = {
      where: _0x1edb9e
    };
    const _0xaf20d7 = await prisma.setting.findUnique(_0x1708ac);
    return _0xaf20d7?.value || null;
  } catch {
    return null;
  }
}
async function getStoredKey() {
  try {
    const _0x1feee5 = await prisma.key.findFirst();
    if (!_0x1feee5) {
      return null;
    }
    const _0x44fb14 = {
      id: _0x1feee5.id,
      code: _0x1feee5.code,
      hwid: _0x1feee5.hwid
    };
    return _0x44fb14;
  } catch (_0xde481f) {
    console.error("[AUTH SERVICE] Failed to get stored key:", _0xde481f.message);
    return null;
  }
}
async function checkKeyStatus(_0x19e418, _0xd38370) {
  const _0x34f979 = typeof _0x19e418 === "string" ? _0x19e418.trim() : "";
  const _0x4f4fa5 = typeof _0xd38370 === "string" && _0xd38370.trim() ? _0xd38370.trim() : getMachineHwid();
  if (!_0x34f979) {
    return {
      success: false,
      valid: false,
      status: "INVALID_PARAM",
      error: "กรุณาระบุรหัสคีย์ (Code)"
    };
  }
  const _0x4f04d8 = getServerUrls();
  const _0x5b6d33 = [];
  for (const _0x3a5e9c of _0x4f04d8) {
    _0x5b6d33.push(_0x3a5e9c + "/api/v1/public/keys/status");
    _0x5b6d33.push(_0x3a5e9c + "/api/v1/public/status");
    _0x5b6d33.push(_0x3a5e9c + "/api/v1/key/status");
  }
  let _0x2cf62 = "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ตรวจสอบคีย์ได้";
  for (const _0x2a643c of _0x5b6d33) {
    try {
      const _0x48e6de = {
        code: _0x34f979,
        hwid: _0x4f4fa5
      };
      const _0x509444 = await sendJsonRequest(_0x2a643c, "POST", _0x48e6de);
      if (_0x509444 && _0x509444.data) {
        if (_0x509444.data.valid) {
          if (_0x509444.data.licenseToken) {
            await saveLicenseToken(_0x509444.data.licenseToken);
          }
          const _0x1c799d = {
            success: true,
            valid: true,
            status: _0x509444.data.status || "ACTIVE",
            message: _0x509444.data.message || "คีย์ถูกต้องและพร้อมใช้งาน",
            key: _0x509444.data.key
          };
          return _0x1c799d;
        } else {
          const _0x92ddc2 = {
            success: false,
            valid: false,
            status: _0x509444.data.status || "INVALID",
            error: _0x509444.data.error || _0x509444.data.message || "คีย์ไม่ถูกต้องหรือหมดอายุ",
            expiresAt: _0x509444.data.expiresAt
          };
          return _0x92ddc2;
        }
      }
    } catch (_0x3a9e98) {
      _0x2cf62 = _0x3a9e98.message || "Network error";
    }
  }
  const _0x51805d = {
    success: false,
    valid: false,
    status: "SERVER_UNREACHABLE",
    error: "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ตรวจสอบคีย์ได้ (" + _0x2cf62 + ")"
  };
  return _0x51805d;
}
async function redeemKey(_0x448caa, _0x3468bd) {
  const _0x4885e4 = typeof _0x448caa === "string" ? _0x448caa.trim() : "";
  const _0x1031f0 = typeof _0x3468bd === "string" && _0x3468bd.trim() ? _0x3468bd.trim() : getMachineHwid();
  if (!_0x4885e4) {
    return {
      success: false,
      error: "กรุณาระบุรหัสคีย์ (Code)"
    };
  }
  const _0x54c941 = getServerUrls();
  const _0x1a7772 = [];
  for (const _0xd543b9 of _0x54c941) {
    _0x1a7772.push(_0xd543b9 + "/api/v1/public/keys/redeem");
    _0x1a7772.push(_0xd543b9 + "/api/v1/public/redeem");
  }
  let _0x4da3d0 = "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์เปิดใช้งานคีย์ได้";
  for (const _0x1e812a of _0x1a7772) {
    try {
      const _0x8bb3f9 = {
        code: _0x4885e4,
        hwid: _0x1031f0
      };
      const _0x418f6c = await sendJsonRequest(_0x1e812a, "POST", _0x8bb3f9);
      if (_0x418f6c && _0x418f6c.data) {
        if (_0x418f6c.data.success || _0x418f6c.data.key) {
          if (_0x418f6c.data.licenseToken) {
            await saveLicenseToken(_0x418f6c.data.licenseToken);
          }
          const _0x1c1d5a = {
            success: true,
            message: _0x418f6c.data.message || "เปิดใช้งานคีย์และผูกเครื่องนี้สำเร็จเรียบร้อยแล้ว",
            key: _0x418f6c.data.key
          };
          return _0x1c1d5a;
        } else if (_0x418f6c.data.error) {
          const _0x28892b = {
            success: false,
            error: _0x418f6c.data.error
          };
          return _0x28892b;
        }
      }
    } catch (_0x56793f) {
      _0x4da3d0 = _0x56793f.message || "Network error";
    }
  }
  const _0x24cfc2 = {
    success: false,
    error: "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์เปิดใช้งานคีย์ได้ (" + _0x4da3d0 + ")"
  };
  return _0x24cfc2;
}
async function resetKeyHwid(_0x15dc21) {
  const _0x31727e = typeof _0x15dc21 === "string" ? _0x15dc21.trim() : "";
  if (!_0x31727e) {
    return {
      success: false,
      error: "กรุณาระบุรหัสคีย์ (Code)"
    };
  }
  const _0x2befee = getServerUrls();
  const _0x2ed1f7 = [];
  for (const _0x25a0a8 of _0x2befee) {
    _0x2ed1f7.push(_0x25a0a8 + "/api/v1/public/keys/reset-hwid");
    _0x2ed1f7.push(_0x25a0a8 + "/api/v1/public/reset-hwid");
  }
  let _0x506f19 = "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์รีเซ็ต HWID ได้";
  for (const _0x29a41e of _0x2ed1f7) {
    try {
      const _0x389a10 = {
        code: _0x31727e
      };
      const _0x1ef4ad = await sendJsonRequest(_0x29a41e, "POST", _0x389a10);
      if (_0x1ef4ad && _0x1ef4ad.data) {
        if (_0x1ef4ad.data.success) {
          const _0x32c61a = {
            success: true,
            message: _0x1ef4ad.data.message || "รีเซ็ต HWID สำเร็จ สามารถเปิดใช้งานบนเครื่องใหม่ได้ทันที"
          };
          return _0x32c61a;
        } else if (_0x1ef4ad.data.error) {
          const _0x433125 = {
            success: false,
            error: _0x1ef4ad.data.error,
            remainingSeconds: _0x1ef4ad.data.remainingSeconds
          };
          return _0x433125;
        }
      }
    } catch (_0x168a41) {
      _0x506f19 = _0x168a41.message || "Network error";
    }
  }
  const _0x5e855f = {
    success: false,
    error: "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์รีเซ็ต HWID ได้ (" + _0x506f19 + ")"
  };
  return _0x5e855f;
}
async function activateKey(_0x58fb88) {
  const _0x184a71 = typeof _0x58fb88 === "string" ? _0x58fb88.trim() : "";
  if (!_0x184a71) {
    return {
      success: false,
      error: "กรุณากรอกรหัส License Key"
    };
  }
  const _0xf493c7 = getMachineHwid();
  const _0x5989e9 = await redeemKey(_0x184a71, _0xf493c7);
  if (!_0x5989e9.success) {
    const _0x10dbd4 = {
      success: false,
      error: _0x5989e9.error || "ไม่สามารถเปิดใช้งานคีย์ได้"
    };
    return _0x10dbd4;
  }
  const _0x4578ca = _0x5989e9.key;
  try {
    await prisma.key.deleteMany({});
    const _0xe2eb41 = {
      code: _0x184a71,
      hwid: _0xf493c7
    };
    const _0x5af25e = {
      data: _0xe2eb41
    };
    const _0xe8cc2e = await prisma.key.create(_0x5af25e);
    const _0x19262f = {
      id: _0xe8cc2e.id,
      code: _0xe8cc2e.code,
      hwid: _0xe8cc2e.hwid,
      details: _0x4578ca
    };
    const _0x4ff144 = {
      success: true,
      message: _0x5989e9.message || "เปิดใช้งานคีย์สำเร็จเรียบร้อยแล้ว",
      data: _0x19262f
    };
    return _0x4ff144;
  } catch (_0x5472b7) {
    console.error("[AUTH SERVICE] Failed to save key to DB:", _0x5472b7.message);
    const _0x58f3d3 = {
      success: false,
      error: "บันทึกข้อมูลคีย์ลงฐานข้อมูลไม่สำเร็จ: " + _0x5472b7.message
    };
    return _0x58f3d3;
  }
}
async function deactivateKey() {
  try {
    await prisma.key.deleteMany({});
    const _0xec01b0 = {
      key: LICENSE_TOKEN_SETTING_KEY
    };
    const _0x40fc13 = {
      where: _0xec01b0
    };
    await prisma.setting.deleteMany(_0x40fc13).catch(() => {});
    return {
      success: true,
      message: "ลบรหัสคีย์และออกจากระบบเรียบร้อยแล้ว"
    };
  } catch (_0x367939) {
    console.error("[AUTH SERVICE] Failed to delete key:", _0x367939.message);
    const _0x4579df = {
      success: false,
      message: "ไม่สามารถออกจากระบบได้: " + _0x367939.message
    };
    return _0x4579df;
  }
}
async function validateStartupKey() {
  try {
    const _0x407412 = await getStoredKey();
    const _0x281893 = getMachineHwid();
    if (!_0x407412 || !_0x407412.code) {
      const _0x3a9531 = {
        authenticated: false,
        hwid: _0x281893,
        reason: "NO_KEY",
        error: "ยังไม่มีการเปิดใช้งาน License Key"
      };
      return _0x3a9531;
    }
    const _0x1ad3d6 = await checkKeyStatus(_0x407412.code, _0x281893);
    if (_0x1ad3d6.valid && (_0x1ad3d6.status === "ACTIVE" || _0x1ad3d6.status === "UNACTIVATED")) {
      let _0x25ab15 = _0x1ad3d6.key;
      if (_0x1ad3d6.status === "UNACTIVATED") {
        const _0x15660b = await redeemKey(_0x407412.code, _0x281893);
        if (_0x15660b.success && _0x15660b.key) {
          _0x25ab15 = _0x15660b.key;
        }
      }
      if (_0x407412.hwid !== _0x281893) {
        const _0x4d6ba8 = {
          id: _0x407412.id
        };
        const _0x28d6ff = {
          hwid: _0x281893
        };
        const _0x210b80 = {
          where: _0x4d6ba8,
          data: _0x28d6ff
        };
        await prisma.key.updateMany(_0x210b80).catch(() => {});
      }
      const _0x215dc8 = {
        id: _0x407412.id,
        code: _0x407412.code,
        hwid: _0x281893
      };
      const _0x3c1cf0 = {
        authenticated: true,
        key: _0x215dc8,
        details: _0x25ab15
      };
      return _0x3c1cf0;
    } else if (_0x1ad3d6.status === "SERVER_UNREACHABLE") {
      const _0x70dbe4 = await loadLicenseToken();
      if (!_0x70dbe4) {
        const _0x59d84c = {
          authenticated: false,
          hwid: _0x281893,
          reason: "NO_OFFLINE_TOKEN",
          error: "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้ และยังไม่มีรหัสยืนยันแบบออฟไลน์ กรุณาเชื่อมต่ออินเทอร์เน็ตเพื่อยืนยันสิทธิ์อย่างน้อยครั้งแรก"
        };
        return _0x59d84c;
      }
      const _0x206558 = verifyLicenseToken(_0x70dbe4, _0x407412.code, _0x281893);
      if (_0x206558.valid) {
        const _0x49fe43 = {
          authenticated: true,
          offline: true,
          key: _0x407412,
          warning: "เซิร์ฟเวอร์ออฟไลน์ — ใช้งานด้วยรหัสยืนยันที่เซิร์ฟเวอร์เซ็นไว้ (ต้องออนไลน์ยืนยันใหม่ภายใน " + (_0x206558.payload?.exp || "1 สัปดาห์") + ")"
        };
        return _0x49fe43;
      }
      const _0xc2d0d7 = {
        VERIFICATION_EXPIRED: "หมดเวลายืนยันสิทธิ์แบบออฟไลน์ กรุณาเชื่อมต่ออินเทอร์เน็ตเพื่อยืนยันอีกครั้ง",
        LICENSE_EXPIRED: "คีย์หมดอายุการใช้งานแล้ว กรุณาต่ออายุคีย์",
        HWID_MISMATCH: "Hardware ID (HWID) ไม่ตรงกับเครื่องที่ลงทะเบียนไว้ กรุณารีเซ็ต HWID ก่อนเปลี่ยนเครื่องใช้งาน",
        BAD_SIGNATURE: "รหัสยืนยันไม่ถูกต้อง กรุณาเชื่อมต่ออินเทอร์เน็ตเพื่อยืนยันใหม่",
        CODE_MISMATCH: "รหัสคีย์ไม่ตรงกับที่เปิดใช้งานไว้ กรุณาเชื่อมต่ออินเทอร์เน็ตเพื่อยืนยันใหม่"
      };
      const _0xc4cd3e = {
        authenticated: false,
        hwid: _0x281893,
        reason: _0x206558.reason || "OFFLINE_TOKEN_INVALID",
        error: _0xc2d0d7[_0x206558.reason] || "ไม่สามารถยืนยันสิทธิ์แบบออฟไลน์ได้ กรุณาเชื่อมต่ออินเทอร์เน็ต"
      };
      return _0xc4cd3e;
    }
    const _0x38d207 = {
      authenticated: false,
      hwid: _0x281893,
      reason: _0x1ad3d6.status || "INVALID_KEY",
      error: _0x1ad3d6.error || "คีย์หมดอายุหรือถูกระงับการใช้งาน"
    };
    return _0x38d207;
  } catch (_0x1dd8af) {
    console.error("[AUTH SERVICE] Error in validateStartupKey:", _0x1dd8af.message);
    return {
      authenticated: false,
      hwid: getMachineHwid(),
      reason: "ERROR",
      error: _0x1dd8af.message
    };
  }
}
const _0x572cea = {
  getHwid: getMachineHwid,
  getStoredKey: getStoredKey,
  checkKeyStatus: checkKeyStatus,
  redeemKey: redeemKey,
  resetKeyHwid: resetKeyHwid,
  activateKey: activateKey,
  deactivateKey: deactivateKey,
  validateStartupKey: validateStartupKey,
  SERVER_BASE_URL: SERVER_BASE_URL
};
module.exports = _0x572cea;
