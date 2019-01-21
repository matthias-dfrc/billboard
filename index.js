const electron = require('electron');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    alwaysOnTop: true
  });
  mainWindow.loadURL('file://'+__dirname+'/main.html');
});
