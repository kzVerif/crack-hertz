module.exports = (_0x45e80f, _0x19e2f0, _0x42b9d1) => {
  _0x45e80f.handle("group:create", async (_0x44e4ab, _0xe1d13d) => {
    return _0x42b9d1.group.createGroup(_0xe1d13d);
  });
  _0x45e80f.handle("group:update", async (_0x23d0d0, _0x5b5778) => {
    return _0x42b9d1.group.updateGroup(_0x5b5778);
  });
  _0x45e80f.handle("group:get-all", async (_0x576891, _0x3b425b) => {
    return _0x42b9d1.group.getGroups(_0x3b425b);
  });
  _0x45e80f.handle("group:get-by-name", async (_0x16e995, _0x2873b, _0x231e2a) => {
    return _0x42b9d1.group.getGroupByName(_0x2873b, _0x231e2a);
  });
  _0x45e80f.handle("group:delete", async (_0x2e0ce8, _0x2f1e07, _0x5b9d2d) => {
    return _0x42b9d1.group.deleteGroup(_0x2f1e07, _0x5b9d2d);
  });
  _0x45e80f.handle("group:open-folder", async (_0x4eade1, _0x16dc48, _0x4480a5) => {
    return _0x42b9d1.group.openGroupFolder(_0x16dc48, _0x4480a5);
  });
  _0x45e80f.handle("group:select-images", async () => {
    return _0x42b9d1.group.selectImagesDialog(_0x19e2f0);
  });
  _0x45e80f.handle("group:get-image-preview", async (_0x9f9960, _0x4091d0, _0x2a9419, _0x1558c7) => {
    return _0x42b9d1.group.getImagePreview(_0x4091d0, _0x2a9419, _0x1558c7);
  });
  _0x45e80f.handle("group:toggle-active", async (_0x192e0a, _0x1f2220, _0x13eeb0, _0x16e053) => {
    return _0x42b9d1.group.toggleActiveGroup(_0x1f2220, _0x13eeb0, _0x16e053);
  });
  _0x45e80f.handle("group:delete-pending", async (_0x4c5395, _0x500d38) => {
    return _0x42b9d1.deletePending.startDeletePending(_0x500d38, _0x19e2f0);
  });
  _0x45e80f.handle("group:abort-delete-pending", async (_0x1e99ea, _0x35ce40) => {
    return _0x42b9d1.deletePending.abortDeletePending(_0x35ce40);
  });
  _0x45e80f.handle("group:get-joined", async (_0x26bd08, _0x1cdf39) => {
    return _0x42b9d1.getJoinedGroups.startGetJoinedGroups(_0x1cdf39, _0x19e2f0);
  });
  _0x45e80f.handle("group:abort-get-joined", async (_0x271c16, _0x1b1df4) => {
    return _0x42b9d1.getJoinedGroups.abortGetJoinedGroups(_0x1b1df4);
  });
};
