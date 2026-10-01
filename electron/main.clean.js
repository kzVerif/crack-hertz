require("bytenode");
const {
  app,
  BrowserWindow,
  ipcMain,
  Menu
} = require("electron");
const path = require("path");
const http = require("http");
const fs = require("fs");
let logFilePath = null;
const writeLog = _0x36d8c7 => {
  try {
    if (!logFilePath && app) {
      logFilePath = path.join(app.getPath("userData"), "main.log");
    }
    if (logFilePath) {
      fs.appendFileSync(logFilePath, "[" + new Date().toISOString() + "] " + _0x36d8c7 + "\n");
    }
  } catch {}
  console.log("[Hertz-Electron] " + _0x36d8c7);
};
process.on("uncaughtException", _0x1f90f9 => {
  writeLog("Uncaught Exception: " + (_0x1f90f9.stack || _0x1f90f9));
});
process.on("unhandledRejection", _0x13c5d0 => {
  writeLog("Unhandled Rejection: " + (_0x13c5d0.stack || _0x13c5d0));
});
const services = require("./services");
const registerControllers = require("./controllers");
let mainWindow = null;
let splashWindow = null;
const isDev = !app.isPackaged;
const windowIcon = fs.existsSync(path.join(app.getAppPath(), "build-resources", "icon.png")) ? path.join(app.getAppPath(), "build-resources", "icon.png") : undefined;
const createSplashWindow = () => {
  splashWindow = new BrowserWindow({
    width: 520,
    height: 440,
    transparent: true,
    backgroundColor: "#00000000",
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    center: true,
    hasShadow: false,
    icon: windowIcon,
    webPreferences: {
      preload: path.join(__dirname, "splash", "splash-preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  splashWindow.loadFile(path.join(__dirname, "splash", "splash.html"));
  splashWindow.on("closed", () => {
    splashWindow = null;
  });
};
const waitForHttp200 = (_0x445df9, _0x5af184) => {
  let _0x389b43 = false;
  const _0x30f46a = () => {
    if (_0x389b43) {
      return;
    }
    let _0x3d8ae7 = false;
    const _0x3b9813 = http.get(_0x445df9, _0x98a5e6 => {
      _0x3d8ae7 = true;
      _0x98a5e6.resume();
      console.log("[Hertz-Electron] Health check status: " + _0x98a5e6.statusCode);
      if (_0x98a5e6.statusCode === 200) {
        if (!_0x389b43) {
          _0x389b43 = true;
          console.log("[Hertz-Electron] Server Ready (HTTP 200 OK)! Initiating transition...");
          _0x5af184();
        }
      } else if (!_0x389b43) {
        setTimeout(_0x30f46a, 500);
      }
    });
    _0x3b9813.on("error", () => {
      if (!_0x3d8ae7 && !_0x389b43) {
        setTimeout(_0x30f46a, 500);
      }
    });
    _0x3b9813.setTimeout(15000, () => {
      _0x3b9813.destroy();
      if (!_0x3d8ae7 && !_0x389b43) {
        setTimeout(_0x30f46a, 500);
      }
    });
  };
  _0x30f46a();
};
const createMainWindow = (_0x16bbe8 = "") => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 700,
    minWidth: 1200,
    minHeight: 700,
    maxWidth: 1200,
    maxHeight: 700,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false,
    show: false,
    backgroundColor: "#0a0a0a",
    icon: windowIcon,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  registerControllers(ipcMain, mainWindow, services);
  if (services.remoteSync && typeof services.remoteSync.startRemoteSync === "function") {
    services.remoteSync.startRemoteSync(mainWindow).catch(() => {});
  }
  const _0x3f40b2 = "http://localhost:3001" + _0x16bbe8;
  mainWindow.loadURL(_0x3f40b2);
  if (isDev) {
    mainWindow.webContents.session.clearCache();
  }
  mainWindow.webContents.on("before-input-event", (_0x546742, _0x2666ce) => {
    const _0x41cc0f = _0x2666ce.control || _0x2666ce.meta;
    if (_0x2666ce.type === "keyDown") {
      if (_0x2666ce.key === "F5" || _0x41cc0f && _0x2666ce.key === "r") {
        mainWindow.webContents.reload();
        _0x546742.preventDefault();
      }
      if (_0x41cc0f && _0x2666ce.shift && _0x2666ce.key === "R") {
        mainWindow.webContents.reloadIgnoringCache();
        _0x546742.preventDefault();
      }
      if (_0x2666ce.key === "F12" || _0x41cc0f && _0x2666ce.shift && (_0x2666ce.key === "I" || _0x2666ce.key === "C")) {
        if (isDev) {
          mainWindow.webContents.toggleDevTools();
        }
        _0x546742.preventDefault();
      }
    }
  });
  if (!isDev) {
    mainWindow.webContents.on("devtools-opened", () => {
      mainWindow.webContents.closeDevTools();
      writeLog("[Hertz-Electron] Blocked DevTools open attempt in production");
    });
  }
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};
ipcMain.on("splash-expand-window", () => {
  if (!splashWindow || splashWindow.isDestroyed()) {
    return;
  }
  const _0x4c98b9 = 900;
  const _0x5ac7fe = 760;
  const _0x755aa2 = splashWindow.getBounds();
  const _0x3d99b6 = _0x755aa2.x + Math.floor(_0x755aa2.width / 2);
  const _0x2fb915 = _0x755aa2.y + Math.floor(_0x755aa2.height / 2);
  const _0xa0bffe = Math.floor(_0x3d99b6 - _0x4c98b9 / 2);
  const _0x1c7e7e = Math.floor(_0x2fb915 - _0x5ac7fe / 2);
  const _0xfccc81 = {
    x: _0xa0bffe,
    y: _0x1c7e7e,
    width: _0x4c98b9,
    height: _0x5ac7fe
  };
  splashWindow.setBounds(_0xfccc81, false);
});
let nextServerProcess = null;
const startProductionNextServer = () => {
  const {
    fork: _0x753a33
  } = require("child_process");
  const _0x321b4b = require("fs");
  const _0x17a73b = [path.join(process.resourcesPath || "", "app.asar.unpacked/client/.next/standalone/client/server.js"), path.join(process.resourcesPath || "", "client/.next/standalone/client/server.js"), path.join(__dirname, "../client/.next/standalone/client/server.js")];
  const _0x2c96b2 = _0x17a73b.find(_0xca2199 => _0xca2199 && _0x321b4b.existsSync(_0xca2199));
  if (!_0x2c96b2) {
    writeLog("[Hertz-Electron] Next.js server.js not found in possible paths: " + JSON.stringify(_0x17a73b));
    return;
  }
  writeLog("[Hertz-Electron] Launching production Next.js server at: " + _0x2c96b2);
  nextServerProcess = _0x753a33(_0x2c96b2, [], {
    env: {
      ...process.env,
      PORT: "3001",
      HOSTNAME: "localhost",
      NODE_ENV: "production"
    },
    cwd: path.dirname(_0x2c96b2),
    stdio: ["ignore", "pipe", "pipe", "ipc"]
  });
  if (nextServerProcess.stdout) {
    nextServerProcess.stdout.on("data", _0x5f24e0 => {
      writeLog("[Next.js Server]: " + _0x5f24e0);
    });
  }
  if (nextServerProcess.stderr) {
    nextServerProcess.stderr.on("data", _0x13f56d => {
      writeLog("[Next.js Server Error]: " + _0x13f56d);
    });
  }
  nextServerProcess.on("error", _0x10ea4e => {
    writeLog("[Hertz-Electron] Next server process error: " + (_0x10ea4e.stack || _0x10ea4e));
  });
};
const startApp = () => {
  createSplashWindow();
  const _0x1ef066 = services.auth && typeof services.auth.validateStartupKey === "function" ? services.auth.validateStartupKey().catch(() => ({
    authenticated: false
  })) : Promise.resolve({
    authenticated: false
  });
  if (!isDev) {
    startProductionNextServer();
  }
  let _0x177b17 = false;
  const _0x128366 = async () => {
    if (_0x177b17) {
      return;
    }
    _0x177b17 = true;
    const _0x3fc1dc = await _0x1ef066;
    const _0x3fe6c7 = _0x3fc1dc && _0x3fc1dc.authenticated ? "" : "/auth";
    if (splashWindow && !splashWindow.isDestroyed()) {
      splashWindow.webContents.send("http-200-ready");
    }
    createMainWindow(_0x3fe6c7);
    const _0x14d606 = () => {
      if (!mainWindow || mainWindow.isDestroyed()) {
        return;
      }
      mainWindow.setOpacity(0.02);
      mainWindow.show();
      mainWindow.focus();
      const _0x16b5a1 = 900;
      const _0x553422 = 16;
      let _0x337295 = 0;
      const _0xf10e66 = setInterval(() => {
        _0x337295 += _0x553422;
        const _0x60c7d4 = Math.min(_0x337295 / _0x16b5a1, 1);
        const _0x3673dc = Math.pow(_0x60c7d4, 3);
        mainWindow.setOpacity(Math.max(0.02, _0x3673dc));
        if (_0x60c7d4 >= 1) {
          clearInterval(_0xf10e66);
          mainWindow.setOpacity(1);
          if (splashWindow && !splashWindow.isDestroyed()) {
            splashWindow.close();
            splashWindow = null;
          }
        }
      }, _0x553422);
    };
    ipcMain.once("splash-animation-complete", () => {
      _0x14d606();
    });
    setTimeout(() => {
      if (!_0x177b17 || mainWindow && !mainWindow.isVisible()) {
        _0x14d606();
      }
    }, 2000);
  };
  waitForHttp200("http://localhost:3001", () => {
    _0x128366();
  });
};
app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  if (services.remoteSync && typeof services.remoteSync.startRemoteSync === "function") {
    services.remoteSync.startRemoteSync(mainWindow).catch(() => {});
  }
  startApp();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      if (mainWindow) {
        mainWindow.show();
      } else {
        createMainWindow();
        mainWindow.show();
      }
    }
  });
});
app.on("before-quit", () => {
  if (services.remoteSync && typeof services.remoteSync.stopRemoteSync === "function") {
    services.remoteSync.stopRemoteSync();
  }
});
app.on("will-quit", () => {
  if (services.remoteSync && typeof services.remoteSync.stopRemoteSync === "function") {
    services.remoteSync.stopRemoteSync();
  }
  for (const _0x4f1741 of [services.post, services.deletePending, services.getJoinedGroups]) {
    if (_0x4f1741 && typeof _0x4f1741.killAllForQuit === "function") {
      try {
        _0x4f1741.killAllForQuit();
      } catch {}
    }
  }
  if (nextServerProcess) {
    try {
      nextServerProcess.kill();
    } catch {}
    nextServerProcess = null;
  }
});
app.on("window-all-closed", async () => {
  if (services.remoteSync && typeof services.remoteSync.stopRemoteSync === "function") {
    await services.remoteSync.stopRemoteSync();
  }
  if (process.platform !== "darwin") {
    app.quit();
  }
});
