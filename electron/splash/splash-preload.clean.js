const {
  contextBridge,
  ipcRenderer
} = require("electron");
contextBridge.exposeInMainWorld("splashApi", {
  onHttp200: _0x45ada1 => {
    const _0x561581 = () => _0x45ada1();
    ipcRenderer.on("http-200-ready", _0x561581);
    return () => ipcRenderer.removeListener("http-200-ready", _0x561581);
  },
  signalCompleted: () => {
    ipcRenderer.send("splash-animation-complete");
  },
  expandWindowForBurst: () => {
    ipcRenderer.send("splash-expand-window");
  }
});
