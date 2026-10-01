const paths = require("../../shared/paths");
function getPaths() {
  const _0x1a1fd1 = {
    appData: paths.APPDATA,
    baseDir: paths.BASE_DIR,
    usersDir: paths.USERS_DIR,
    configDir: paths.CONFIG_DIR,
    configPath: paths.CONFIG_PATH,
    tempProfileDir: paths.TEMP_PROFILE_DIR
  };
  return _0x1a1fd1;
}
async function openFolder(_0x19b6c6) {
  return paths.openFolder(_0x19b6c6 || paths.BASE_DIR);
}
async function openUserFolder(_0x3089f6) {
  return paths.openUserFolder(_0x3089f6);
}
const _0x586df6 = {
  ...paths
};
_0x586df6.getPaths = getPaths;
_0x586df6.openFolder = openFolder;
_0x586df6.openUserFolder = openUserFolder;
module.exports = _0x586df6;
