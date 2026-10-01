const {
  contextBridge,
  ipcRenderer
} = require("electron");
const electronApi = {
  minimize: () => ipcRenderer.send("window-minimize"),
  maximize: () => ipcRenderer.send("window-maximize"),
  close: () => ipcRenderer.send("window-close"),
  reload: () => ipcRenderer.send("window-reload"),
  dragStart: (_0x146741, _0x21a59a) => ipcRenderer.send("window-drag-start", _0x146741, _0x21a59a),
  dragMove: (_0x52bbf3, _0x59edfd) => ipcRenderer.send("window-drag-move", _0x52bbf3, _0x59edfd),
  dragEnd: () => ipcRenderer.send("window-drag-end"),
  account: {
    startAdding: () => ipcRenderer.invoke("account:start-adding"),
    stopAdding: () => ipcRenderer.invoke("account:stop-adding"),
    getAll: () => ipcRenderer.invoke("account:get-all"),
    delete: _0x5b5ad6 => ipcRenderer.invoke("account:delete", _0x5b5ad6),
    selectAvatar: () => ipcRenderer.invoke("account:select-avatar"),
    saveCustomProfile: _0xacac8 => ipcRenderer.invoke("account:save-custom-profile", _0xacac8),
    onLoginDone: _0x1f2a0d => {
      const _0x4a9a23 = (_0x4b74df, _0x480a49) => _0x1f2a0d(_0x480a49);
      ipcRenderer.on("account:login-done", _0x4a9a23);
      return () => ipcRenderer.removeListener("account:login-done", _0x4a9a23);
    },
    onLog: _0x168792 => {
      const _0x391244 = (_0x4bd891, _0x27330f) => _0x168792(_0x27330f);
      ipcRenderer.on("account:log", _0x391244);
      return () => ipcRenderer.removeListener("account:log", _0x391244);
    }
  },
  path: {
    getPaths: () => ipcRenderer.invoke("paths:get-all"),
    openFolder: _0x440afa => ipcRenderer.invoke("paths:open", _0x440afa),
    openUserFolder: _0x58b84d => ipcRenderer.invoke("paths:open-user", _0x58b84d)
  },
  group: {
    create: _0x183d96 => ipcRenderer.invoke("group:create", _0x183d96),
    update: _0x42b433 => ipcRenderer.invoke("group:update", _0x42b433),
    getAll: _0xdadbb9 => ipcRenderer.invoke("group:get-all", _0xdadbb9),
    getByName: (_0x1c03c3, _0x5a1006) => ipcRenderer.invoke("group:get-by-name", _0x1c03c3, _0x5a1006),
    delete: (_0x5c0391, _0x45342a) => ipcRenderer.invoke("group:delete", _0x5c0391, _0x45342a),
    openFolder: (_0x152286, _0x1db52f) => ipcRenderer.invoke("group:open-folder", _0x152286, _0x1db52f),
    selectImages: () => ipcRenderer.invoke("group:select-images"),
    getImagePreview: (_0x538399, _0x4d8df4, _0x5d7354) => ipcRenderer.invoke("group:get-image-preview", _0x538399, _0x4d8df4, _0x5d7354),
    toggleActive: (_0x44521a, _0x1438bd, _0x33c4c5) => ipcRenderer.invoke("group:toggle-active", _0x44521a, _0x1438bd, _0x33c4c5),
    deletePending: _0x215d35 => ipcRenderer.invoke("group:delete-pending", _0x215d35),
    abortDeletePending: _0x5696b9 => ipcRenderer.invoke("group:abort-delete-pending", _0x5696b9),
    onDeletePendingStatus: _0x1087cd => {
      const _0x14e88e = (_0x144bad, _0x27a980) => _0x1087cd(_0x27a980);
      ipcRenderer.on("group:delete-pending-status", _0x14e88e);
      return () => ipcRenderer.removeListener("group:delete-pending-status", _0x14e88e);
    },
    getJoined: _0x22b297 => ipcRenderer.invoke("group:get-joined", _0x22b297),
    abortGetJoined: _0x310ecc => ipcRenderer.invoke("group:abort-get-joined", _0x310ecc),
    onJoinedGroupsStatus: _0x107c8d => {
      const _0x3db9ce = (_0xad2215, _0xd8cc4a) => _0x107c8d(_0xd8cc4a);
      ipcRenderer.on("group:joined-status", _0x3db9ce);
      return () => ipcRenderer.removeListener("group:joined-status", _0x3db9ce);
    }
  },
  post: {
    startAll: () => ipcRenderer.invoke("post:start-all"),
    stopAll: () => ipcRenderer.invoke("post:stop-all"),
    startUser: _0x504223 => ipcRenderer.invoke("post:start-user", _0x504223),
    stopUser: _0x54b991 => ipcRenderer.invoke("post:stop-user", _0x54b991),
    getStatus: () => ipcRenderer.invoke("post:get-status"),
    onStatusChange: _0x35184f => {
      const _0x118035 = (_0x337f4a, _0x3d0640) => _0x35184f(_0x3d0640);
      ipcRenderer.on("post:status-change", _0x118035);
      return () => ipcRenderer.removeListener("post:status-change", _0x118035);
    },
    onLog: _0x55067a => {
      const _0x356f07 = (_0x1c2319, _0x10a739) => _0x55067a(_0x10a739);
      ipcRenderer.on("post:log", _0x356f07);
      return () => ipcRenderer.removeListener("post:log", _0x356f07);
    },
    onProgress: _0x32476e => {
      const _0xfc59f2 = (_0x2a13c4, _0x16c358) => _0x32476e(_0x16c358);
      ipcRenderer.on("post:progress", _0xfc59f2);
      return () => ipcRenderer.removeListener("post:progress", _0xfc59f2);
    },
    onTask: _0x5b1535 => {
      const _0x41bb95 = (_0xcb2733, _0x4475bd) => _0x5b1535(_0x4475bd);
      ipcRenderer.on("post:task", _0x41bb95);
      return () => ipcRenderer.removeListener("post:task", _0x41bb95);
    },
    onNetStatus: _0x41b205 => {
      const _0x107dad = (_0x29573f, _0x3d594b) => _0x41b205(_0x3d594b);
      ipcRenderer.on("post:net-status", _0x107dad);
      return () => ipcRenderer.removeListener("post:net-status", _0x107dad);
    }
  },
  stats: {
    getAll: () => ipcRenderer.invoke("stats:get-all"),
    getUser: _0x1310a9 => ipcRenderer.invoke("stats:get-user", _0x1310a9),
    getAllUsers: () => ipcRenderer.invoke("stats:get-all-users"),
    getDaily: _0x4469c3 => ipcRenderer.invoke("stats:get-daily", _0x4469c3),
    record: (_0x16f36f, _0xa4851b) => ipcRenderer.invoke("stats:record", {
      userId: _0x16f36f,
      outcome: _0xa4851b
    }),
    resetUser: _0x40dc96 => ipcRenderer.invoke("stats:reset-user", _0x40dc96),
    resetAll: () => ipcRenderer.invoke("stats:reset-all")
  },
  config: {
    get: () => ipcRenderer.invoke("config:get"),
    save: _0x183f89 => ipcRenderer.invoke("config:save", _0x183f89),
    reset: () => ipcRenderer.invoke("config:reset"),
    setRemoteSync: _0x3580c0 => ipcRenderer.invoke("config:set-remote-sync", _0x3580c0),
    testWebhook: _0x15cbbd => ipcRenderer.invoke("webhook:test", _0x15cbbd)
  },
  update: {
    check: () => ipcRenderer.invoke("update:check"),
    openUrl: _0x2c39fb => ipcRenderer.invoke("update:open-url", _0x2c39fb),
    getCurrentVersion: () => ipcRenderer.invoke("update:get-current-version"),
    startDownload: () => ipcRenderer.invoke("update:start-download"),
    cancelDownload: () => ipcRenderer.invoke("update:cancel-download"),
    onProgress: _0x1489e8 => {
      const _0x56d4f4 = (_0x3c6321, _0x5a0669) => _0x1489e8(_0x5a0669);
      ipcRenderer.on("update:download-progress", _0x56d4f4);
      return () => {
        ipcRenderer.removeListener("update:download-progress", _0x56d4f4);
      };
    }
  },
  auth: {
    getHwid: () => ipcRenderer.invoke("auth:get-hwid"),
    getKey: () => ipcRenderer.invoke("auth:get-key"),
    checkStatus: _0x289ffe => ipcRenderer.invoke("auth:check-status", _0x289ffe),
    activate: _0x4b53f3 => ipcRenderer.invoke("auth:activate", _0x4b53f3),
    resetHwid: _0x1c5b23 => ipcRenderer.invoke("auth:reset-hwid", _0x1c5b23),
    deactivate: () => ipcRenderer.invoke("auth:deactivate"),
    validate: () => ipcRenderer.invoke("auth:validate")
  },
  remote: {
    onDataChanged: _0x22924f => {
      const _0x3e10dd = (_0x391eb1, _0x43ede6) => _0x22924f(_0x43ede6);
      ipcRenderer.on("remote:data-changed", _0x3e10dd);
      return () => {
        ipcRenderer.removeListener("remote:data-changed", _0x3e10dd);
      };
    }
  }
};
contextBridge.exposeInMainWorld("electronApi", electronApi);
contextBridge.exposeInMainWorld("api", electronApi);
