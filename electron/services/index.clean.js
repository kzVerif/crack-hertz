const windowService = require("./window.service");
const accountService = require("./account.service");
const pathService = require("./path.service");
const groupService = require("./group.service");
const postService = require("./post.service");
const statsService = require("./stats.service");
const configService = require("./config.service");
const deletePendingService = require("./deletePending.service");
const getJoinedGroupsService = require("./getJoinedGroups.service");
const updateService = require("./update.service");
const remoteSyncService = require("./remoteSync.service");
const authService = require("./auth.service");
const _0x43fcbb = {
  window: windowService,
  account: accountService,
  path: pathService,
  group: groupService,
  post: postService,
  stats: statsService,
  config: configService,
  deletePending: deletePendingService,
  getJoinedGroups: getJoinedGroupsService,
  update: updateService,
  remoteSync: remoteSyncService,
  auth: authService
};
module.exports = _0x43fcbb;
