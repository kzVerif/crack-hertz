const sharedPaths = require("../../shared/paths");
const {
  APPDATA,
  BASE_DIR,
  USERS_DIR,
  CONFIG_PATH
} = sharedPaths;
const FACEBOOK_URLS = {
  login: "https://www.facebook.com",
  profile: "https://www.facebook.com/me"
};
const SELECTORS_LOGIN = {
  inputEmail: "input[name=\"email\"], input[name=\"อีเมลล์\"]",
  inputPassword: "input[name=\"pass\"], input[name=\"รหัสผ่าน\"]",
  loginBtn: "[aria-label=\"Log In\"], [aria-label=\"Log in\"], [aria-label=\"เข้าสู่ระบบ\"], [aria-label=\"ล็อกอิน\"], button[type=\"submit\"], input[type=\"submit\"]"
};
const SELECTORS_PROFILE = {
  closeBtn: "button:has-text(\"ปิด\"), button:has-text(\"close\"), button[aria-label=\"ปิด\"], button[aria-label=\"Close\"]",
  saveDeviceDismiss: "div[role=\"button\"]:has-text(\"Not Now\"), div[role=\"button\"]:has-text(\"ไม่ตอนนี้\")",
  mainContainer: "span[dir=\"auto\"], [role=\"main\"]"
};
const SELECTORS_POST = {
  closeBtn: "button:has-text(\"ปิด\"), button:has-text(\"close\"), button[aria-label=\"ปิด\"], button[aria-label=\"Close\"]",
  findNewContent: "span:has-text(\"เขียนอะไรสักหน่อย....\"), span:has-text(\"Write something...\")",
  inputDescription: "[contenteditable=\"true\"][role=\"textbox\"]:not([aria-label^=\"เขียนถึง\"]):not([aria-label^=\"Write to\"]), div[aria-placeholder=\"เขียนอะไรหน่อย...\"]:not([aria-label^=\"เขียนถึง\"]):not([aria-label^=\"Write to\"]), div[aria-placeholder=\"Write something...\"]:not([aria-label^=\"เขียนถึง\"]):not([aria-label^=\"Write to\"]), div[aria-placeholder=\"สร้างโพสต์สาธารณะ...\"]:not([aria-label^=\"เขียนถึง\"]):not([aria-label^=\"Write to\"]), div[aria-placeholder=\"Create a public post…\"]:not([aria-label^=\"เขียนถึง\"]):not([aria-label^=\"Write to\"])",
  inputFile: "input[type=\"file\"]",
  postBtn: "[aria-label=\"โพสต์\"][role=\"button\"], [aria-label=\"Post\"][role=\"button\"]"
};
const COMMENT_SELECTORS = {
  inputComment: "div[role=\"textbox\"][contenteditable=\"true\"], [aria-label*=\"Comment by\" i], [aria-label*=\"แสดงความคิดเห็นในชื่อ\" i], [aria-label*=\"Write a comment\" i], [aria-label*=\"เขียนความคิดเห็น\" i], [aria-label*=\"comment\" i][contenteditable=\"true\"], [aria-label*=\"ความคิดเห็น\" i][contenteditable=\"true\"]",
  inputReaction: "div[role=\"button\"]:has([data-ad-rendering-role=\"like_button\"]), div[role=\"button\"][aria-label=\"Like\"], div[role=\"button\"][aria-label=\"ถูกใจ\"]",
  postComment: "div[aria-label=\"Post comment\" i][role=\"button\"], div[aria-label=\"โพสต์ความคิดเห็น\" i][role=\"button\"], div[aria-label=\"Submit\" i][role=\"button\"], div[aria-label=\"Post\" i][role=\"button\"], div[aria-label=\"โพสต์\" i][role=\"button\"]"
};
const REACTIONS = {
  LIKE: "[aria-label=\"ถูกใจ\"], [aria-label=\"Like\"]",
  LOVE: "[aria-label=\"รักเลย\"], [aria-label=\"Love\"]",
  CARE: "[aria-label=\"ห่วงใย\"], [aria-label=\"Care\"]",
  HAHA: "[aria-label=\"ฮ่าๆ\"], [aria-label=\"ฮ่า ๆ\"], [aria-label=\"Haha\"]",
  WOW: "[aria-label=\"ว้าว\"], [aria-label=\"Wow\"]",
  SAD: "[aria-label=\"เศร้า\"], [aria-label=\"Sad\"]",
  ANGRY: "[aria-label=\"โกรธ\"], [aria-label=\"Angry\"]"
};
const PENDING_SELECTORS = {
  deleteBtn: "div[aria-label=\"ลบ\"][role=\"button\"][tabindex=\"0\"], div[aria-label=\"Delete\"][role=\"button\"][tabindex=\"0\"]",
  deleteConfirm: "div[role=\"dialog\"][aria-label=\"ต้องการลบโพสต์หรือไม่\"] [aria-label=\"ลบ\"][role=\"button\"][tabindex=\"0\"], div[role=\"dialog\"][aria-label=\"Delete post?\"] [aria-label=\"Delete\"][role=\"button\"][tabindex=\"0\"]"
};
const _0x262ad1 = {
  ...sharedPaths
};
_0x262ad1.FACEBOOK_URLS = FACEBOOK_URLS;
_0x262ad1.SELECTORS_LOGIN = SELECTORS_LOGIN;
_0x262ad1.SELECTORS_PROFILE = SELECTORS_PROFILE;
_0x262ad1.SELECTORS_POST = SELECTORS_POST;
_0x262ad1.COMMENT_SELECTORS = COMMENT_SELECTORS;
_0x262ad1.REACTIONS = REACTIONS;
_0x262ad1.PENDING_SELECTORS = PENDING_SELECTORS;
module.exports = _0x262ad1;
