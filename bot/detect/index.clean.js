const {
  checkPausedGroupOnPage,
  checkPendingOnGroupPage,
  checkAvailablePage
} = require("./pageStatus");
const {
  realtimeChecking
} = require("./realtimeChecking");
const {
  validateUploadedMedia
} = require("./mediaVerify");
const {
  detectDelete,
  createDeletePoller
} = require("./postDetect");
const {
  generateFingerprint,
  buildStealthScript,
  applyStealthToContext
} = require("./stealth");
const {
  validateTypeError,
  isBrowserClosed,
  isSelectorError,
  isNonAutomationError,
  ERROR_TYPES,
  ERROR_CODES
} = require("../utils/validateTypeError");
const _0x15a76 = {
  checkPausedGroupOnPage: checkPausedGroupOnPage,
  checkPendingOnGroupPage: checkPendingOnGroupPage,
  checkAvailablePage: checkAvailablePage,
  realtimeChecking: realtimeChecking,
  validateUploadedMedia: validateUploadedMedia,
  detectDelete: detectDelete,
  createDeletePoller: createDeletePoller,
  generateFingerprint: generateFingerprint,
  buildStealthScript: buildStealthScript,
  applyStealthToContext: applyStealthToContext,
  validateTypeError: validateTypeError,
  isBrowserClosed: isBrowserClosed,
  isSelectorError: isSelectorError,
  isNonAutomationError: isNonAutomationError,
  ERROR_TYPES: ERROR_TYPES,
  ERROR_CODES: ERROR_CODES
};
module.exports = _0x15a76;
