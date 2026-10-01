const os = require("os");
module.exports = (_0x2b0445, _0x389d8f, _0x4c7c9b) => {
  _0x2b0445.handle("config:get", async () => {
    return _0x4c7c9b.config.getConfig();
  });
  _0x2b0445.handle("config:save", async (_0x5e31b7, _0x4b4985) => {
    return _0x4c7c9b.config.saveConfig(_0x4b4985);
  });
  _0x2b0445.handle("config:reset", async () => {
    return _0x4c7c9b.config.resetConfig();
  });
  _0x2b0445.handle("config:set-remote-sync", async (_0x559d40, _0x57215e) => {
    const _0x10d6c9 = {
      remoteSyncEnabled: _0x57215e?.remoteSyncEnabled === true,
      screenShareEnabled: _0x57215e?.screenShareEnabled === true
    };
    const _0x3841a1 = await _0x4c7c9b.config.saveConfig(_0x10d6c9);
    if (_0x4c7c9b.remoteSync && typeof _0x4c7c9b.remoteSync.restartRemoteSync === "function") {
      await _0x4c7c9b.remoteSync.restartRemoteSync().catch(() => {});
    }
    const _0xb0eef3 = {
      remoteSyncEnabled: _0x10d6c9.remoteSyncEnabled,
      screenShareEnabled: _0x10d6c9.screenShareEnabled
    };
    const _0x3ec64a = {
      success: _0x3841a1?.success !== false,
      data: _0xb0eef3,
      message: _0x10d6c9.remoteSyncEnabled ? "เปิดการเชื่อมต่อเซิร์ฟเวอร์เรียบร้อยแล้ว" : "ปิดการเชื่อมต่อเซิร์ฟเวอร์เรียบร้อยแล้ว (ไม่มีการส่งข้อมูลออกนอกเครื่อง)"
    };
    return _0x3ec64a;
  });
  _0x2b0445.handle("webhook:test", async (_0x2a9224, _0x29278e) => {
    const _0x357a22 = typeof _0x29278e?.url === "string" ? _0x29278e.url.trim() : "";
    if (!_0x357a22) {
      return {
        success: false,
        message: "ยังไม่ได้กรอก Webhook URL"
      };
    }
    try {
      const {
        createWebhookNotifier: _0x2502ac
      } = require("../../bot/utils/webhook");
      const _0x3bbfef = {
        enabled: true,
        url: _0x357a22
      };
      const _0x545ad8 = {
        webhook: _0x3bbfef
      };
      const _0x5e4d3d = _0x2502ac(_0x545ad8, {
        accountName: "ทดสอบระบบ"
      });
      const _0x6079b6 = await _0x5e4d3d.send("test", {
        machine: os.hostname()
      });
      if (_0x6079b6) {
        return {
          success: true,
          message: "ส่งข้อความทดสอบแล้ว ตรวจช่องทางปลายทางได้เลย"
        };
      } else {
        return {
          success: false,
          message: "ส่งไม่สำเร็จ (URL ไม่ถูกต้อง หรือปลายทางไม่ตอบกลับ)"
        };
      }
    } catch (_0x4cb6b2) {
      const _0x43130f = {
        success: false,
        message: "ส่งไม่สำเร็จ: " + _0x4cb6b2.message
      };
      return _0x43130f;
    }
  });
};
