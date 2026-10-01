const path = require("path");
const os = require("os");
const fs = require("fs");
const {
  exec
} = require("child_process");
function getAppDataDir() {
  if (process.env.APPDATA) {
    return process.env.APPDATA;
  }
  const _0x38f129 = os.homedir();
  if (process.platform === "win32") {
    return path.join(_0x38f129, "AppData", "Roaming");
  }
  if (process.platform === "darwin") {
    return path.join(_0x38f129, "Library", "Application Support");
  }
  return process.env.XDG_CONFIG_HOME || path.join(_0x38f129, ".config");
}
const APPDATA = getAppDataDir();
const BASE_DIR = path.join(APPDATA, "Hertz Manager");
const USERS_DIR = path.join(BASE_DIR, "Users");
const CONFIG_DIR = path.join(BASE_DIR, "Config");
const CONFIG_PATH = path.join(CONFIG_DIR, "config.json");
const CONFIG_FILE = CONFIG_PATH;
const TEMP_PROFILE_DIR = path.join(BASE_DIR, "temp-browser-profile");
const GROUPS_DIR = path.join(BASE_DIR, "Groups");
const DATABASE_DIR = path.join(BASE_DIR, "Database");
const DB_DIR = DATABASE_DIR;
const DB_FILE = path.join(DATABASE_DIR, "hertz.db");
const DB_PATH = DB_FILE;
const STORAGE_DIR = path.join(BASE_DIR, "Storage");
const STORAGE_IMAGES_DIR = path.join(STORAGE_DIR, "Images");
const STORAGE_USERS_DIR = path.join(STORAGE_DIR, "Users");
const TEMP_DIR = path.join(BASE_DIR, "Temp");
const LOGS_DIR = path.join(BASE_DIR, "Logs");
function isInsideDir(_0x4794b, _0x1f4c0d) {
  const _0x37ed44 = path.resolve(_0x4794b) + path.sep;
  const _0x30138a = path.resolve(_0x1f4c0d);
  return _0x30138a.startsWith(_0x37ed44);
}
function getUserDir(_0x7d3291) {
  const _0x2636ea = path.resolve(USERS_DIR, String(_0x7d3291 ?? ""));
  if (!isInsideDir(USERS_DIR, _0x2636ea)) {
    throw new Error("Invalid userId: " + _0x7d3291);
  }
  return _0x2636ea;
}
function getUserProfilePath(_0x27e15c) {
  return path.join(getUserDir(_0x27e15c), "profile.json");
}
function getUserAvatarPath(_0x18ec43) {
  return path.join(getUserDir(_0x18ec43), "avatar.jpg");
}
function getUserBrowserProfileDir(_0x3069cd) {
  return path.join(getUserDir(_0x3069cd), "browser-profile");
}
function getUserGroupsDir(_0x5b9f20) {
  return path.join(getUserDir(_0x5b9f20), "groups");
}
function getGroupsDir(_0x42f2c9) {
  if (_0x42f2c9) {
    return getUserGroupsDir(_0x42f2c9);
  }
  return GROUPS_DIR;
}
function getGroupDir(_0x1502d6, _0x25baee) {
  const _0x2a4c59 = getGroupsDir(_0x25baee);
  const _0x250cef = path.resolve(_0x2a4c59, String(_0x1502d6 ?? ""));
  if (!isInsideDir(_0x2a4c59, _0x250cef)) {
    throw new Error("Invalid groupName: " + _0x1502d6);
  }
  return _0x250cef;
}
function getGroupImageDir(_0x8dc50, _0x43a710) {
  return path.join(getGroupDir(_0x8dc50, _0x43a710), "image");
}
function getGroupContentFile(_0x4db376, _0x403cff) {
  return path.join(getGroupDir(_0x4db376, _0x403cff), "content.txt");
}
function getGroupCommentsFile(_0x2a9510, _0x4737f3) {
  return path.join(getGroupDir(_0x2a9510, _0x4737f3), "comments.txt");
}
function getGroupReactionFile(_0x22b77a, _0x1bfb88) {
  return path.join(getGroupDir(_0x22b77a, _0x1bfb88), "reaction.txt");
}
function getGroupLinkFile(_0x57080f, _0x4e9328) {
  return path.join(getGroupDir(_0x57080f, _0x4e9328), "link.txt");
}
function ensureDir(_0x5c5d35) {
  if (!fs.existsSync(_0x5c5d35)) {
    fs.mkdirSync(_0x5c5d35, {
      recursive: true
    });
  }
  return _0x5c5d35;
}
function ensureBaseDir() {
  return ensureDir(BASE_DIR);
}
function ensureUsersDir() {
  return ensureDir(USERS_DIR);
}
function ensureConfigDir() {
  return ensureDir(CONFIG_DIR);
}
function ensureUserDir(_0x460aa0) {
  const _0x1e7900 = ensureDir(getUserDir(_0x460aa0));
  ensureDir(getUserGroupsDir(_0x460aa0));
  return _0x1e7900;
}
function ensureGroupsDir(_0x4e6190) {
  return ensureDir(getGroupsDir(_0x4e6190));
}
function ensureGroupDir(_0x6fdf31, _0x595252) {
  const _0x379f1a = ensureDir(getGroupDir(_0x6fdf31, _0x595252));
  ensureDir(getGroupImageDir(_0x6fdf31, _0x595252));
  return _0x379f1a;
}
function getGroupStorageImageDir(_0x140d7e) {
  return path.join(STORAGE_IMAGES_DIR, "group_" + _0x140d7e);
}
function getUserStorageDir(_0x432eb6) {
  return path.join(STORAGE_USERS_DIR, String(_0x432eb6));
}
function ensureDatabaseDir() {
  return ensureDir(DATABASE_DIR);
}
function ensureStorageDir() {
  ensureDir(STORAGE_DIR);
  ensureDir(STORAGE_IMAGES_DIR);
  ensureDir(STORAGE_USERS_DIR);
  return STORAGE_DIR;
}
function ensureGroupStorageImageDir(_0x1780da) {
  return ensureDir(getGroupStorageImageDir(_0x1780da));
}
function ensureUserStorageDir(_0xd4190d) {
  const _0x385852 = ensureDir(getUserStorageDir(_0xd4190d));
  ensureDir(path.join(_0x385852, "browser-profile"));
  return _0x385852;
}
function ensureTempDir() {
  return ensureDir(TEMP_DIR);
}
function ensureLogsDir() {
  return ensureDir(LOGS_DIR);
}
async function openFolder(_0x22de5c = BASE_DIR) {
  try {
    ensureDir(_0x22de5c);
    try {
      const _0x3a92fb = require("electron");
      if (_0x3a92fb && _0x3a92fb.shell && typeof _0x3a92fb.shell.openPath === "function") {
        const _0x1426f5 = await _0x3a92fb.shell.openPath(_0x22de5c);
        if (_0x1426f5) {
          const _0x24866e = {
            success: false,
            message: _0x1426f5
          };
          return _0x24866e;
        }
        const _0xfdb99c = {
          success: true,
          message: "Opened: " + _0x22de5c
        };
        return _0xfdb99c;
      }
    } catch {}
    return new Promise(_0x9e43d7 => {
      let _0x179b2c = "";
      if (process.platform === "win32") {
        _0x179b2c = "explorer \"" + _0x22de5c + "\"";
      } else if (process.platform === "darwin") {
        _0x179b2c = "open \"" + _0x22de5c + "\"";
      } else {
        _0x179b2c = "xdg-open \"" + _0x22de5c + "\"";
      }
      exec(_0x179b2c, _0x4eb5ba => {
        if (_0x4eb5ba) {
          const _0x7e0b7a = {
            success: false,
            message: _0x4eb5ba.message
          };
          _0x9e43d7(_0x7e0b7a);
        } else {
          const _0x2536de = {
            success: true,
            message: "Opened: " + _0x22de5c
          };
          _0x9e43d7(_0x2536de);
        }
      });
    });
  } catch (_0x206596) {
    const _0x136a94 = {
      success: false,
      message: _0x206596.message
    };
    return _0x136a94;
  }
}
async function openUserFolder(_0x1c980f) {
  const _0x403149 = getUserDir(_0x1c980f);
  return openFolder(_0x403149);
}
async function openGroupsDir(_0x1052c6) {
  const _0x2469c7 = getGroupsDir(_0x1052c6);
  return openFolder(_0x2469c7);
}
async function openGroupFolder(_0x33ddf2, _0x35466e) {
  const _0x950c37 = getGroupDir(_0x33ddf2, _0x35466e);
  return openFolder(_0x950c37);
}
const paths = {
  APPDATA: APPDATA,
  APPDATA_DIR: APPDATA,
  BASE_DIR: BASE_DIR,
  USERS_DIR: USERS_DIR,
  GROUPS_DIR: GROUPS_DIR,
  CONFIG_DIR: CONFIG_DIR,
  CONFIG_PATH: CONFIG_PATH,
  CONFIG_FILE: CONFIG_FILE,
  TEMP_PROFILE_DIR: TEMP_PROFILE_DIR,
  DATABASE_DIR: DATABASE_DIR,
  DB_DIR: DB_DIR,
  DB_FILE: DB_FILE,
  DB_PATH: DB_PATH,
  STORAGE_DIR: STORAGE_DIR,
  STORAGE_IMAGES_DIR: STORAGE_IMAGES_DIR,
  STORAGE_USERS_DIR: STORAGE_USERS_DIR,
  TEMP_DIR: TEMP_DIR,
  LOGS_DIR: LOGS_DIR,
  getUserDir: getUserDir,
  getUserProfilePath: getUserProfilePath,
  getUserProfileFile: getUserProfilePath,
  getUserAvatarPath: getUserAvatarPath,
  getUserAvatarFile: getUserAvatarPath,
  getUserBrowserProfileDir: getUserBrowserProfileDir,
  getUserGroupsDir: getUserGroupsDir,
  getUserStorageDir: getUserStorageDir,
  getGroupsDir: getGroupsDir,
  getGroupDir: getGroupDir,
  getGroupImageDir: getGroupImageDir,
  getGroupStorageImageDir: getGroupStorageImageDir,
  getGroupContentFile: getGroupContentFile,
  getGroupCommentsFile: getGroupCommentsFile,
  getGroupReactionFile: getGroupReactionFile,
  getGroupLinkFile: getGroupLinkFile,
  ensureDir: ensureDir,
  ensureBaseDir: ensureBaseDir,
  ensureUsersDir: ensureUsersDir,
  ensureConfigDir: ensureConfigDir,
  ensureUserDir: ensureUserDir,
  ensureGroupsDir: ensureGroupsDir,
  ensureGroupDir: ensureGroupDir,
  ensureDatabaseDir: ensureDatabaseDir,
  ensureStorageDir: ensureStorageDir,
  ensureGroupStorageImageDir: ensureGroupStorageImageDir,
  ensureUserStorageDir: ensureUserStorageDir,
  ensureTempDir: ensureTempDir,
  ensureLogsDir: ensureLogsDir,
  openFolder: openFolder,
  openBaseDir: () => openFolder(BASE_DIR),
  openUsersDir: () => openFolder(USERS_DIR),
  openUserFolder: openUserFolder,
  openGroupsDir: openGroupsDir,
  openGroupFolder: openGroupFolder
};
if (typeof global !== "undefined") {
  global.HERTZ_PATHS = paths;
}
module.exports = paths;
