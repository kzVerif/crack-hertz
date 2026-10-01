const {
  prisma
} = require("../db");
const {
  DEFAULT_CONFIG,
  validateConfig
} = require("../../shared/config");
const CONFIG_KEY = "config";
async function getConfig() {
  try {
    const _0x37a9c3 = {
      key: CONFIG_KEY
    };
    const _0x322266 = {
      where: _0x37a9c3
    };
    const _0x373e0e = await prisma.setting.findUnique(_0x322266);
    if (!_0x373e0e || !_0x373e0e.value) {
      const _0x4b9d9e = JSON.stringify(DEFAULT_CONFIG, null, 2);
      const _0x3afc9e = {
        key: CONFIG_KEY
      };
      const _0x581681 = {
        key: CONFIG_KEY,
        value: _0x4b9d9e
      };
      const _0x5c8da5 = {
        value: _0x4b9d9e
      };
      const _0x21248b = {
        where: _0x3afc9e,
        create: _0x581681,
        update: _0x5c8da5
      };
      await prisma.setting.upsert(_0x21248b);
      const _0x5b918e = {
        ...DEFAULT_CONFIG
      };
      return _0x5b918e;
    }
    const _0x4f17ae = JSON.parse(_0x373e0e.value);
    return validateConfig(_0x4f17ae);
  } catch (_0x3a12c1) {
    console.error("[CONFIG SERVICE] Failed to get config, fallback to default:", _0x3a12c1.message);
    const _0x90b892 = {
      ...DEFAULT_CONFIG
    };
    return _0x90b892;
  }
}
async function saveConfig(_0x188907) {
  try {
    const _0x65a6be = await getConfig();
    const _0x4ba1bf = {
      ..._0x65a6be,
      ...(typeof _0x188907 === "object" && _0x188907 !== null ? _0x188907 : {})
    };
    const _0x1aa478 = validateConfig(_0x4ba1bf);
    const _0x120844 = JSON.stringify(_0x1aa478, null, 2);
    const _0x649695 = {
      key: CONFIG_KEY
    };
    const _0x1e24e1 = {
      key: CONFIG_KEY,
      value: _0x120844
    };
    const _0x1e5355 = {
      value: _0x120844
    };
    const _0x3069f3 = {
      where: _0x649695,
      create: _0x1e24e1,
      update: _0x1e5355
    };
    await prisma.setting.upsert(_0x3069f3);
    const _0x396d18 = {
      success: true,
      data: _0x1aa478,
      message: "บันทึกการตั้งค่าเรียบร้อยแล้ว"
    };
    return _0x396d18;
  } catch (_0xc274fb) {
    console.error("[CONFIG SERVICE] Failed to save config:", _0xc274fb.message);
    const _0x167895 = {
      success: false,
      message: "ไม่สามารถบันทึกการตั้งค่าได้: " + _0xc274fb.message
    };
    return _0x167895;
  }
}
async function resetConfig() {
  try {
    const _0x166827 = JSON.stringify(DEFAULT_CONFIG, null, 2);
    const _0x4bc19a = {
      key: CONFIG_KEY
    };
    const _0x5647ba = {
      key: CONFIG_KEY,
      value: _0x166827
    };
    const _0x41099b = {
      value: _0x166827
    };
    const _0x42888b = {
      where: _0x4bc19a,
      create: _0x5647ba,
      update: _0x41099b
    };
    await prisma.setting.upsert(_0x42888b);
    const _0x1e6ca0 = {
      ...DEFAULT_CONFIG
    };
    const _0x59c52c = {
      success: true,
      data: _0x1e6ca0,
      message: "คืนค่าเริ่มต้นเรียบร้อยแล้ว"
    };
    return _0x59c52c;
  } catch (_0x25fbbe) {
    console.error("[CONFIG SERVICE] Failed to reset config:", _0x25fbbe.message);
    const _0x256f76 = {
      ...DEFAULT_CONFIG
    };
    const _0x1782ed = {
      success: false,
      data: _0x256f76,
      message: "ไม่สามารถคืนค่าเริ่มต้นได้: " + _0x25fbbe.message
    };
    return _0x1782ed;
  }
}
const _0x573c95 = {
  getConfig: getConfig,
  saveConfig: saveConfig,
  resetConfig: resetConfig
};
module.exports = _0x573c95;
