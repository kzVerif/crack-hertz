const ERROR_TYPES = {
  BROWSER_CLOSED: "BROWSER_CLOSED",
  SELECTOR_NOT_FOUND: "SELECTOR_NOT_FOUND",
  NON_AUTOMATION: "NON_AUTOMATION",
  UNKNOWN: "UNKNOWN"
};
const ERROR_CODES = {
  USER_CLOSED_WINDOW: "USER_CLOSED_WINDOW",
  TARGET_CRASHED: "TARGET_CRASHED",
  SELECTOR_TIMEOUT: "SELECTOR_TIMEOUT",
  ELEMENT_NOT_ATTACHED: "ELEMENT_NOT_ATTACHED",
  DIALOG_NOT_FOUND: "DIALOG_NOT_FOUND",
  POST_BUTTON_NOT_FOUND: "POST_BUTTON_NOT_FOUND",
  INPUT_FIELD_NOT_FOUND: "INPUT_FIELD_NOT_FOUND",
  NETWORK_DISCONNECTED: "NETWORK_DISCONNECTED",
  NETWORK_TIMEOUT: "NETWORK_TIMEOUT",
  FACEBOOK_RESTRICTION: "FACEBOOK_RESTRICTION",
  FACEBOOK_CHECKPOINT: "FACEBOOK_CHECKPOINT",
  PROFILE_LOCKED: "PROFILE_LOCKED",
  CHROME_NOT_FOUND: "CHROME_NOT_FOUND",
  SYSTEM_PERMISSION: "SYSTEM_PERMISSION",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
};
const PATTERNS = {
  BROWSER_CLOSED: [/Target page, context or browser has been closed/i, /Target closed/i, /browser has been closed/i, /browserContext\.close/i, /page\.close: Target closed/i, /Protocol error \(Target\.closeTarget\): Target closed/i, /Protocol error \(Runtime\.callFunctionOn\): Target closed/i, /Protocol error \(Page\.navigate\): Target closed/i, /Protocol error: Connection closed/i, /Connection closed/i, /Execution context was destroyed/i, /Session closed/i, /Browser window was closed/i, /closed by user/i, /ปิดหน้าต่างเบราว์เซอร์/i],
  SELECTOR_NOT_FOUND: [/waiting for selector .* failed: timeout/i, /waiting for locator\(.*\) failed: timeout/i, /locator\..*: Timeout .* exceeded/i, /elementHandle\..*: Timeout/i, /page\.waitForSelector: Timeout/i, /Element is not attached to the DOM/i, /Element is not visible/i, /Node is detached from document/i, /ไม่พบปุ่มเปิดกล่องสร้างโพสต์/i, /ไม่พบช่องสำหรับพิมพ์ข้อความ/i, /ไม่พบปุ่มโพสต์/i, /ไม่พบปุ่มคอมเมนต์/i, /ไม่พบปุ่มรีแอคชัน/i, /ไม่พบกล่องสร้างโพสต์/i, /ไม่พบองค์ประกอบ/i],
  NON_AUTOMATION: {
    NETWORK: [/net::ERR_INTERNET_DISCONNECTED/i, /net::ERR_NAME_NOT_RESOLVED/i, /net::ERR_CONNECTION_TIMED_OUT/i, /net::ERR_CONNECTION_REFUSED/i, /net::ERR_NETWORK_CHANGED/i, /net::ERR_ADDRESS_UNREACHABLE/i, /net::ERR_TIMED_OUT/i, /ENOTFOUND/i, /ECONNRESET/i, /ETIMEDOUT/i, /ECONNREFUSED/i, /Navigation timeout of .* exceeded/i, /page\.goto: Timeout .* exceeded/i],
    FACEBOOK: [/We limit how often you can post/i, /ตรวจพบการจำกัดจำนวนการโพสต์/i, /Rate limit/i, /checkpoint/i, /Login approval needed/i, /Account temporarily locked/i, /Session expired/i, /You’re Temporarily Blocked/i, /คุณถูกบล็อกชั่วคราว/i, /เนื้อหาไม่พร้อมใช้งาน/i, /กลุ่มถูกพักชั่วคราว/i, /Group unavailable/i],
    SYSTEM: [/ProcessSingleton/i, /SingletonLock/i, /EBUSY/i, /EPERM/i, /Chrome executable not found/i, /ไม่พบ Google Chrome ในเครื่อง/i, /cannot open display/i]
  }
};
function validateTypeError(_0x4734a2, _0x242ad3 = {}) {
  const _0x11f946 = _0x4734a2 instanceof Error ? _0x4734a2.message : typeof _0x4734a2 === "string" ? _0x4734a2 : JSON.stringify(_0x4734a2 || "");
  if (_0x242ad3?.page && typeof _0x242ad3.page.isClosed === "function" && _0x242ad3.page.isClosed()) {
    const _0x31df8c = {
      type: ERROR_TYPES.BROWSER_CLOSED,
      code: ERROR_CODES.USER_CLOSED_WINDOW,
      userMessage: "หน้าต่างเบราว์เซอร์ถูกปิดโดยผู้ใช้",
      rawMessage: _0x11f946,
      isFatal: true,
      shouldSkipLink: false,
      isExternalIssue: false
    };
    return _0x31df8c;
  }
  if (_0x242ad3?.context && typeof _0x242ad3.context.isConnected === "function" && !_0x242ad3.context.isConnected()) {
    const _0x30e666 = {
      type: ERROR_TYPES.BROWSER_CLOSED,
      code: ERROR_CODES.USER_CLOSED_WINDOW,
      userMessage: "การเชื่อมต่อกับเบราว์เซอร์ถูกปิด (Browser Disconnected)",
      rawMessage: _0x11f946,
      isFatal: true,
      shouldSkipLink: false,
      isExternalIssue: false
    };
    return _0x30e666;
  }
  for (const _0x55324a of PATTERNS.BROWSER_CLOSED) {
    if (_0x55324a.test(_0x11f946)) {
      const _0x28597b = {
        type: ERROR_TYPES.BROWSER_CLOSED,
        code: ERROR_CODES.USER_CLOSED_WINDOW,
        userMessage: "หน้าต่างเบราว์เซอร์ถูกปิดโดยผู้ใช้ หรือกระบวนการเบราว์เซอร์หยุดทำงาน",
        rawMessage: _0x11f946,
        isFatal: true,
        shouldSkipLink: false,
        isExternalIssue: false
      };
      return _0x28597b;
    }
  }
  for (const _0x14643e of PATTERNS.NON_AUTOMATION.NETWORK) {
    if (_0x14643e.test(_0x11f946)) {
      const _0x54a400 = {
        type: ERROR_TYPES.NON_AUTOMATION,
        code: ERROR_CODES.NETWORK_DISCONNECTED,
        userMessage: "การเชื่อมต่อเครือข่ายอินเทอร์เน็ตขัดข้อง (Network Timeout / Disconnected)",
        rawMessage: _0x11f946,
        isFatal: false,
        shouldSkipLink: true,
        isExternalIssue: true
      };
      return _0x54a400;
    }
  }
  for (const _0x5b3505 of PATTERNS.NON_AUTOMATION.FACEBOOK) {
    if (_0x5b3505.test(_0x11f946)) {
      let _0x1aa72d = "ตรวจพบบัญชี Facebook ติดข้อจำกัดหรือเซสชันหมดอายุ";
      if (/limit/i.test(_0x11f946) || /จำกัด/i.test(_0x11f946)) {
        _0x1aa72d = "ตรวจพบการจำกัดจำนวนการโพสต์จาก Facebook (Rate Limit)";
      } else if (/checkpoint/i.test(_0x11f946)) {
        _0x1aa72d = "บัญชี Facebook ติดการตรวจสอบความปลอดภัย (Checkpoint)";
      } else if (/กลุ่มถูกพัก/i.test(_0x11f946)) {
        _0x1aa72d = "กลุ่ม Facebook ถูกพักการใช้งานชั่วคราว";
      } else if (/เนื้อหาไม่พร้อม/i.test(_0x11f946)) {
        _0x1aa72d = "เนื้อหากลุ่มไม่พร้อมใช้งาน หรือลิงก์กลุ่มไม่ถูกต้อง";
      }
      const _0x3edd32 = {
        type: ERROR_TYPES.NON_AUTOMATION,
        code: ERROR_CODES.FACEBOOK_RESTRICTION,
        userMessage: _0x1aa72d,
        rawMessage: _0x11f946,
        isFatal: false,
        shouldSkipLink: true,
        isExternalIssue: true
      };
      return _0x3edd32;
    }
  }
  for (const _0xfe3e6e of PATTERNS.NON_AUTOMATION.SYSTEM) {
    if (_0xfe3e6e.test(_0x11f946)) {
      let _0x3fe82a = "เกิดข้อผิดพลาดของระบบปฏิบัติการหรือสภาพแวดล้อม";
      if (/Singleton/i.test(_0x11f946)) {
        _0x3fe82a = "โปรไฟล์ Google Chrome ถูกล็อกโดยกระบวนการอื่น กรุณาปิด Chrome ที่ค้างอยู่ใน Task Manager";
      } else if (/Chrome executable/i.test(_0x11f946) || /ไม่พบ Google Chrome/i.test(_0x11f946)) {
        _0x3fe82a = "ไม่พบโปรแกรม Google Chrome ในเครื่อง กรุณาติดตั้ง Chrome";
      }
      const _0xf062b9 = {
        type: ERROR_TYPES.NON_AUTOMATION,
        code: ERROR_CODES.SYSTEM_PERMISSION,
        userMessage: _0x3fe82a,
        rawMessage: _0x11f946,
        isFatal: true,
        shouldSkipLink: false,
        isExternalIssue: true
      };
      return _0xf062b9;
    }
  }
  for (const _0x21879d of PATTERNS.SELECTOR_NOT_FOUND) {
    if (_0x21879d.test(_0x11f946)) {
      let _0x101066 = "หาองค์ประกอบบนหน้าเว็บไม่เจอ (Selector Timeout)";
      if (/ปุ่มเปิดกล่องสร้างโพสต์/i.test(_0x11f946)) {
        _0x101066 = "ไม่พบปุ่มเปิดกล่องสร้างโพสต์บน Facebook (อาจยังไม่ได้เข้าร่วมกลุ่ม หรือ UI เปลี่ยน)";
      } else if (/ช่องสำหรับพิมพ์/i.test(_0x11f946)) {
        _0x101066 = "ไม่พบช่องสำหรับพิมพ์ข้อความโพสต์ในกล่อง";
      } else if (/ปุ่มโพสต์/i.test(_0x11f946)) {
        _0x101066 = "ไม่พบปุ่มกดโพสต์ หรือปุ่มยังไม่พร้อมใช้งาน";
      }
      const _0x56cfb8 = {
        type: ERROR_TYPES.SELECTOR_NOT_FOUND,
        code: ERROR_CODES.SELECTOR_TIMEOUT,
        userMessage: _0x101066,
        rawMessage: _0x11f946,
        isFatal: false,
        shouldSkipLink: true,
        isExternalIssue: false
      };
      return _0x56cfb8;
    }
  }
  return {
    type: ERROR_TYPES.UNKNOWN,
    code: ERROR_CODES.UNKNOWN_ERROR,
    userMessage: _0x11f946 || "เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ",
    rawMessage: _0x11f946,
    isFatal: false,
    shouldSkipLink: true,
    isExternalIssue: false
  };
}
function isBrowserClosed(_0x3d2937) {
  return validateTypeError(_0x3d2937).type === ERROR_TYPES.BROWSER_CLOSED;
}
function isSelectorError(_0x2edb61) {
  return validateTypeError(_0x2edb61).type === ERROR_TYPES.SELECTOR_NOT_FOUND;
}
function isNonAutomationError(_0x5d1734) {
  return validateTypeError(_0x5d1734).type === ERROR_TYPES.NON_AUTOMATION;
}
const _0x1571a1 = {
  validateTypeError: validateTypeError,
  isBrowserClosed: isBrowserClosed,
  isSelectorError: isSelectorError,
  isNonAutomationError: isNonAutomationError,
  ERROR_TYPES: ERROR_TYPES,
  ERROR_CODES: ERROR_CODES
};
module.exports = _0x1571a1;
